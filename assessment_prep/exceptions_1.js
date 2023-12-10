function stripeAPI(arg){
  console.log('this is the first function');
  if(!arg) throw new Error('no arg!');    // will see this specific error w/ string 'no arg' bubble up through stack to nearest catch block
  // else
  saveToDb();
}

function stripeWrapper(){
  console.log('this is the second function, about to call the first function');
  try{
      stripeAPI();
  } catch(err) {
console.log(' this error will not bubble up to the first function that triggered the function calls!');   // it's been caught!
  }
  // stripeAPI();   // un-comment this line and comment out try-catch to see error bubble up stack to catch block in `callAll`
}

function routeHandler(){
  console.log('this is the third  function, about to call the second function');
  stripeWrapper();
}

function callAll(){
  try{
     routeHandler(); 
     return 'done';
  } catch (err){
     console.log('error in callAll(): ', err);
     return ' not done ';
  }
}

callAll();
