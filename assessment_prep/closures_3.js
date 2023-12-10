// What about variables that are in scope when you invoke a function? Can the function access them? 
// If those variables were in scope at the definition point, then yes, it can. However, if those 
// variables weren't in scope when you defined the function, then the function cannot access them. 
// They're not listed in the envelope since it was created when the function was defined. Only variables 
// that are in scope when you define the function are available to the function.

// Make problem for this