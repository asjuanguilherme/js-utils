const fs = require("fs");
const path = require("path");
const glob = require("glob");

function generateIndexFile(directory) {
  const indexPath = path.join(directory, "index.ts");
  const files = glob.sync("**/*.ts", { cwd: directory });

  const content = files
    .map((file) => `export * from './${file.split(".")[0]}'`)
    .join("\n");

  fs.writeFileSync(indexPath, content);

  console.log(`Generated ${indexPath}`);
}

generateIndexFile("./src/");
