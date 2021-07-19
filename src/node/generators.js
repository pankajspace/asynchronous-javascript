// q1
// Create a custom async generator that loops over the files that are passed in.
// const util = require("util");
// const fs = require("fs");
// const readFile = util.promisify(fs.readFile);
// function* fileLoader(files) {...}
// (async () => {
//   for await (let contents of fileLoader([
//     "./files/demofile.txt",
//     "./files/demofile.other.txt"
//   ])) {
//     console.log(contents);
//   }
// })();

// q1a
const util = require("util");
const fs = require("fs");
const path = require("path");
const readFile = util.promisify(fs.readFile);
function* fileLoader(files) {
  for (let file of files) {
    yield Promise.resolve(readFile(file, "utf-8"));
  }
}
(async () => {
  for await (let contents of fileLoader(
    [
      path.join(__dirname, "./files/demofile.txt"),
      path.join(__dirname, "./files/demofile2.txt")
    ]
  )) {
    console.log(contents);
  }
})(); 