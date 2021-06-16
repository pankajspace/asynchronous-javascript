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
function doAsyncTask(cb) {
  process.nextTick(() => {
    cb();
  })
}
doAsyncTask(_ => console.log(message));
let message = "Callback Called";