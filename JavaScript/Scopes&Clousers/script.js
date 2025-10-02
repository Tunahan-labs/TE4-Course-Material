//Number 1
function makeMultiplier(factor) {
  function inner(number) {
    return number * factor;
  }
  return inner;
}
console.log(makeMultiplier(3)(5));
console.log(makeMultiplier(5)(5));

//Number 2
function counter() {
  let count = 0;
  function increment() {
    count++;
    return count;
  }
  function decrement() {
    count--;
    return count;
  }
  function reset() {
    count = 0;
    return count;
  }
  return {
    increment,
    decrement,
    reset,
  };
}
const counting = counter();
console.log(counting.increment());
console.log(counting.increment());
console.log(counting.decrement());
console.log(counting.increment());
console.log(counting.reset());
