// https://nodejs.dev/learn/the-nodejs-event-loop

// console.log("start");
// const interval = setInterval(() => {
//   debugger;
//   console.log("setInterval");
// }, 0);

// setTimeout(() => {
//   debugger;
//   console.log("setTimeout 1");
//   Promise.resolve()
//     .then(() => {
//       debugger;
//       console.log("promise 3");
//     })
//     .then(() => {
//       debugger;
//       console.log("promise 4");
//     })
//     .then(() => {
//       setTimeout(() => {
//         debugger;
//         console.log("setTimeout 2");
//         Promise.resolve()
//           .then(() => {
//             debugger;
//             console.log("promise 5");
//           })
//           .then(() => {
//             debugger;
//             console.log("promise 6");
//           })
//           .then(() => {
//             debugger;
//             clearInterval(interval);
//           });
//       });
//     });
// });

// Promise.resolve()
//   .then(() => {
//     debugger;
//     console.log("promise 1");
//   })
//   .then(() => {
//     debugger;
//     console.log("promise 2");
//   });

// console.log("end");

// --------------------------------------------------------

// q1
// Using you're knowledge of the event loop, create a program which prints out the below. If the log line mentions a `setInterval` it must be printed inside a `setInterval` etc..

// start
// end
// setInterval 1
// promise 1
// promise 2

// console.log("start");
// const interval = setInterval(() => {
//   console.log("setInterval 1");
//   clearInterval(interval);
// }, 0);
// console.log("end");


// q1a
// console.log("start");
// const interval = setInterval(() => {
//   console.log("setInterval 1");
//   Promise.resolve()
//     .then(() => {
//       console.log("promise 1");
//     })
//     .then(() => {
//       console.log("promise 2");
//     })
//   clearInterval(interval);
// }, 0);
// console.log("end");

// ---------------------------------------------------------

// q2
// Extend the previous example to print out the following log lines, use `process.nextTick` and `setImmediate`

// start
// end
// setInterval 1
// promise 1
// promise 2
// processNextTick 1
// setImmediate 1
// promise 3
// promise 4


// q2a
console.log("start");
const interval = setInterval(() => {
  console.log("setInterval 1");
  Promise.resolve()
    .then(() => {
      console.log("promise 1");
    })
    .then(() => {
      console.log("promise 2");
      process.nextTick(() => {
        console.log("processNextTick 1");
      })
      setImmediate(() => {
        console.log("setImmediate 1");
        Promise.resolve()
          .then(() => {
            console.log("promise 3");
          })
          .then(() => {
            console.log("promise 4");
          })
      })
    })
  clearInterval(interval);
}, 0);

console.log("end");