import { join, parse } from "path";
import { createInterface } from "readline";
import pkg from "fs-extra";

const { readdir, createReadStream, writeFile, copyFile } = pkg;
// This script is not part of faast.js, but rather a tool to rewrite some parts
// of the generated docs from api-generator and api-documenter so they work with
// the website generated by docusaurus.

const outDir = "./docs/python";
const packageRoot = "./submodules/python";
const inDir = packageRoot + "/docs/docs";
const readmePath = packageRoot + "/README.md";

pkg.ensureDirSync(outDir);

async function main() {
  const docFiles = await readdir(inDir);
  for (const docFile of docFiles) {
    try {
      const { name: id, ext } = parse(docFile);
      if (ext !== ".md") {
        continue;
      }

      const docPath = join(inDir, docFile);
      const docPathOut = join(outDir, docFile);
      const input = createReadStream(docPath);
      const output = [];
      const lines = createInterface({
        input,
        crlfDelay: Infinity,
      });

      let title = "";
      lines.on("line", (line) => {
        let skip = false;
        if (!title) {
          const titleLine = line.match(/## (.*)/);
          if (titleLine) {
            title = titleLine[1];
          }
        }

        const homeLink = line.match(/\[Home\]\(.\/index\.md\) &gt; (.*)/);
        if (homeLink) {
          //skip the breadcrumb line alltogether
          return;
        }
        // See issue #4. api-documenter expects \| to escape table
        // column delimiters, but docusaurus uses a markdown processor
        // that doesn't support this. Replace with an escape sequence
        // that renders |.
        if (line.startsWith("|")) {
          line = line.replace(/\\\|/g, "&#124;");
        }
        if (line.includes("<b>")) {
          line = line.replace(/<b>/g, "**");
        }
        if (line.includes("</b>")) {
          line = line.replace(/<\/b>/g, "**");
        }
        if (line.includes("<!-- -->")) {
          line = line.replace(/<!-- -->/g, "");
        }

        output.push(line);
      });

      await new Promise((resolve) => lines.once("close", resolve));
      input.close();

      const header = [
        "---",
        `slug: /${id}`,
        `title: ${title}`,
        `hide_title: true`,
        "---",
      ];

      await writeFile(docPathOut, header.concat(output).join("\n"));
    } catch (err) {
      console.error(`Could not process ${docFile}: ${err}`);
    }
  }
  await copyReadMe();
}

async function copyReadMe() {
  await copyFile(readmePath, join(outDir, "index.md"));
}

main();
