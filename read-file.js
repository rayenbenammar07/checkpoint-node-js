const fs = require("fs");
const path = require("path");
const filePath = path.resolve("Content", "welcome.txnodet");
const data = fs.readFileSync(filePath, { encoding: "utf8" });
console.log(data);

