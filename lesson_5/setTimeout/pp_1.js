// Write a JavaScript function named delayLog that loops through the 
// numbers from 1 to 10, and logs each number after that number of seconds. 
// It should log 1 after 1 second, 2 after 2 seconds, and so on

function delayLog() {
  for (let i = 1; i <= 10; i++) {
    setTimeout(() => console.log(i), (i * 1000));   // timeouts for each i (1-10) are effectively set instantly as the for loop
  }                                             // executes 10 times ~1s before the first console.log statement prints
}                                               // => thus, each number is logged one second apart

delayLog();
// 1  // 1 second later
// 2  // 1 second later (2 seconds after start)
// 3  // 1 second later (3 seconds after start)
// 4  // etc...
// 5
// 6
// 7
// 8
// 9
// 10