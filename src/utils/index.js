import moment from "moment";

export const debounce = (fn, time) => {
  let timeoutId;

  return function () {
    // Check for existing calls
    if (timeoutId) {
      // Reset timer
      clearTimeout(timeoutId);
    }

    timeoutId = setTimeout(() => {
      // Invoke fn
      fn.apply(this, arguments);
    }, time);
  };
};

export const AddTimeStamp = (arr) => {
  return arr.map((item) => ({
    ...item,
    lastSaved: moment().format("ddd, MMM Do, hh:mm a "),
  }));
};
