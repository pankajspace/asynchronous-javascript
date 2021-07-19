// q1
// Convert the promise version of the multi-file loader over to using async/await
// const util = require("util");
// const fs = require("fs");
// const readFile = util.promisify(fs.readFile);
// const files = ["./files/demofile.txt", "./files/demofile.other.txt"];
// let promises = files.map(name => readFile(name, { encoding: "utf8" }));
// Promise.all(promises).then(values => {
//   // <-- Uses .all
//   console.log(values);
// });

// q1 a
const fs = require("fs");
const path = require("path");
const util = require("util");
const readFile = util.promisify(fs.readFile);
const file1Path = path.join(__dirname, "./files") + "/demofile.txt";
const file2Path = path.join(__dirname, "./files") + "/demofile2.txt";
const files = [file1Path, file2Path];
(async function() {
  let promises = files.map(name => readFile(name, { encoding: "utf8" }));
  let values = await Promise.all(promises);
  console.log(values);
}())


// q2
// Again convert the promise version of the multi-file loader over to using async/await but using a custom async iterator with the following syntax
// node --harmony-async-iteration <file.js>
// const fileIterator = files => ({
//   [Symbol.asyncIterator]: () => ({
//     x: 0,
//     next() {
//       // TODO
//     }
//   })
// });
// (async () => {
//   for await (let x of fileIterator([
//     "./files/demofile.txt",
//     "./files/demofile.other.txt"
//   ])) {
//     console.log(x);
//   }
// })();
