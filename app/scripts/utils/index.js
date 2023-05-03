
/** 
 * utility method to delay execution of code, if triggered within duration
 * 
 * @param {function} func - function that will be debounced
 * @param {number} timeout - duration in milliseconds after which provided function will be executed
 * @returns 
 */
export function debounce(func, timeout = 300){
  let timer;
  return (...args) => {
    clearTimeout(timer);
    timer = setTimeout(() => { func.apply(this, args); }, timeout);
  };
}
