import * as fs from "node:fs";

async function writeFile(csv) {
  return await fs.writeFile("result.csv", csv, (err) => {
    if (err) throw err;
    console.log("The file has been saved!");
  });
}

export { writeFile };
