function map(array, callback) {
  return array.reduce((transformedItems, value) => {
    transformedItems.push(callback(value));
    return transformedItems;
  }, []);
}