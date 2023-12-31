// If a catch block re-throws an exception, the exception will bubble up to the nearest try block, exit the try block
// and the related catch block will execute

try {

  try {
    console.log( sum(1, 'a') );
  } catch (err) {
    console.log('First error caught', err.message);
    throw new Error('Second error');
  }

} catch (err) {
  console.log('Second error caught', err.message);
}

// immediately stop execution of try block
// run catch block (if one)
// 