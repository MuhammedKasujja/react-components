export default function useDebounce(fn: Function, delay: number) {
  var timeoutID: number | undefined = undefined;
  return () => {
    clearTimeout(timeoutID);
    var args = arguments;
    var that = this;
    timeoutID = setTimeout(function () {
      fn.apply(that, args);
    }, delay);
  };
}
