// q1
// function doAsyncTask(cb) {
//   cb();
// }
// doAsyncTask(_ => console.log(message));
// let message = "Callback Called";

// q1a1 
// function doAsyncTask(cb) {
//   setImmediate(() => {
//     cb();
//   })
// }
// doAsyncTask(_ => console.log(message));
// let message = "Callback Called";

// q1a2
// function doAsyncTask(cb) {
//   process.nextTick(() => {
//     cb();
//   })
// }
// doAsyncTask(_ => console.log(message));
// let message = "Callback Called";


// q2
// The below code swallows the error and doesn't pass it up the chain, make it pass the error up the stack using the next callback.
// var templateContent = fs.readFileSync(path.join(__dirname, '../templates') + '/my-template.html', 'utf8');
// const fs = require("fs");
// function readFileThenDo(next) {
//   fs.readFile("./blah.nofile", (err, data) => {
//     next(data);
//   });
// }
// readFileThenDo(data => {
//   console.log(data);
// });

// q2a1
const fs = require("fs");
const path = require("path");
const filePath = path.join(__dirname, "./files") + "/demofile.txt";
console.log(filePath);
function readFileThenDo(next) {
  fs.readFile(filePath, "utf8", (err, data) => {
    next(err, data);
  });
}
readFileThenDo((err, data) => {
  if (err) {
    throw Error(`readFileThenDo error: ${err}`);
  }
  console.log(data);
});