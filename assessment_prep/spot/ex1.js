function delayLog() {
  for (var i = 1; i <= 10; i++) {
    setTimeout(() => {
      console.log(i);
    }, 1000 * i);
  }
}


delayLog();