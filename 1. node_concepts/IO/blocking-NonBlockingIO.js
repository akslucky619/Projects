/**
 * CodeBlock 1
 * Blocking NodeJS method - Notice Sync at the end of the method, that means its blocking code.
 */
const fs = require('fs');
// const data = fs.readFileSync('./file.md'); // blocks here until file is read

// console.log(data);

// // moreWork(); will run after console.log
// console.log("additional data");

/**
 * CodeBlock 2
 * Non-Blocking NodeJS method - Notice there is no Sync at the end of the method
 * but has a callback to execute when file reading is actually complete.
 */

fs.readFile('./file.md', (err, data) => {
  if (err) throw err;
  else console.log(data);
});

// moreWork(); will run before console.log
console.log("additional data");




/**
 * Advantages ?
 * - First eg will block the execution of any additional JavaScript until the entire file is read.
 *   Second one is async. Higher throughput.
 * - Error handling in second case, first will crash the program if error occurs.
 * - Predictable, easier to debug and understand. first one
 */