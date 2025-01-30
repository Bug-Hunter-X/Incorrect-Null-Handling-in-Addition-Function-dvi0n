function foo(a, b) {
  // Use nullish coalescing operator to handle null or undefined values
  a = a ?? 0; 
  b = b ?? 0;
  return a + b;
}
console.log(foo(1, 2)); // 3
console.log(foo(null, 2)); // 2
console.log(foo(1, null)); // 1
console.log(foo(null, null)); // 0
//Alternative solution using error handling
function foo2(a,b){
  if(a === null || b === null){
    throw new Error("Null values are not allowed");
  }
  return a+b;
}
console.log(foo2(1,2)); //3
//console.log(foo2(null,2)); // Throws Error