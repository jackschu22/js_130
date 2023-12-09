// Explain the concept of side effects and how it relates to the code below:

function getDate(time) {
  if (time === 'now') {
    return new Date();
  } else {
    return 'Never!';
  }
}

getDate('now');
getDate();