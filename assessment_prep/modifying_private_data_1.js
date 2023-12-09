// The following code contains a subtle "error" regarding private data. Identify 
// and explain the problem, then correct it.

function createJournal() {
  let activityLog = [];

  return {
    pagesFilled: 0,

    write(numberOfPages) {
      this.pagesFilled += numberOfPages;
      activityLog.push({ wrote: `${numberOfPages} pages on ${new Date().toDateString()}`});
    },

    edit(numberOfPages) {
      if (this.pagesFilled >= numberOfPages) {
        activityLog.push({ edited: `${numberOfPages} pages on ${new Date().toDateString()}`});
      } else {
        console.log("Write more first!");
      }
    },

    getRecentActivity() {
      return activityLog[activityLog.length - 1];
    }
  };
}

let myJournal = createJournal();
myJournal.write(15);
myJournal.write(20);

for (let i = 0; i < 10; i++) {
  myJournal.getRecentActivity()[i * Math.random()] = 'qwertyuiopASDFGHJKLzxcvbnm!@#$%^&*()'[Math.floor(25 * Math.random())];
}

console.log(myJournal.getRecentActivity())