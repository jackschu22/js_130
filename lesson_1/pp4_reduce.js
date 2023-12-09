// Write a function that works like the filter function from problem 1. This time, 
// though, you should use Array.prototype.reduce to filter the input array.

function filter(array, callback) {
  return array.reduce((filteredItems, value) => {
    if (callback(value)) {
      filteredItems.push(value);
    }
    return filteredItems;
  }, []);
}