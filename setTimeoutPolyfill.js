function mySetTimeout() {
  function setTimeoutPoly(callback, delay, ...args) {
    var start = Date.now();
    function triggerCallback() {
      if (Date.now() > start + delay) {
        callback.apply(this, args);
      } else {
        requestIdleCallback(triggerCallback);
      }
    }
    requestIdleCallback(triggerCallback);
  }
  return setTimeoutPoly();
}

let setTimePoly = mySetTimeout();

console.log("Start");
setTimePoly(() => {
  console.log("It works");
}, 2000);
console.log("End");
