/**
 *
 * @param {Function} fn
 */
const curry = (fn, initParams = []) => {
  return function curriedFn() {
    const args = Array.prototype.slice.call(arguments);
    const finalArgs = [...initParams, ...args];
    if (finalArgs.length > fn.length) {
      throw new Error(`arguments length error, expect ${fn.length} but got ${args.length}`);
    }
    if (finalArgs.length === fn.length) {
      return fn.apply(null, finalArgs);
    }
    return curry(fn, finalArgs);
  };
};

const multiple = (x,y,z) => x * y * z;

const curriedMultiple = curry(multiple);
// console.log(curriedMultiple(1)(2));
console.log(curriedMultiple(1)(2, 3));


