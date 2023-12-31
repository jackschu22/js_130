// https://blog.openreplay.com/an-introduction-to-javascript-error-handling/
// An exception bubbles up the stack and is caught *once* by the nearest catch block:

try {

  try {
    console.log( sum(1, 'a') );
  } catch (err) {
    console.log('This error will trigger', err.message);
  }

} catch (err) {
  console.log('This error will not trigger', err.message);
}