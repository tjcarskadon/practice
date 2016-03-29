//a function that will return the fibonacci number at the nth location.


function nFib(num,fib) {
  fib = fib || [0,1];
  var fibL = fib.length;

  if(num <= 1 && fibL <=2) {
    return fib[num];
  }

  //base case
  if(num === 1) {
    return fib[fibL-1];
  }

  fib.push(fib[fibL-1] + fib[fibL-2]);
  return nFib(num-1,fib);
}


console.log(nFib(2)); //2