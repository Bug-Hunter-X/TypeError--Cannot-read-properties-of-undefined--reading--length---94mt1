function foo(x){
  if (x === undefined || x === null) {
    return 0; // Or handle the undefined case appropriately
  }
  return x.length;
}