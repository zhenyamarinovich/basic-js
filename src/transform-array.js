const CustomError = require("../extensions/custom-error");

module.exports = function transform(arr) {
  const mass = [];
  let indexDiscard;
  for (let i = 0; i < arr.length; i++) {
    switch (arr[i]) {
      case "--discard-next":
        indexDiscard = i + 1;
        i++;
        break;
      case "--discard-prev":
        if (mass.length && indexDiscard !== i - 1) {
          mass.pop();
        }
        break;
      case "--double-next":
        if (i < arr.length - 1) {
          mass.push(arr[i + 1]);
        }
        break;
      case "--double-prev":
        if (mass.length && indexDiscard !== i - 1) {
          mass.push(mass[mass.length - 1]);
        }
        break;
      default:
        mass.push(arr[i]);
    }
  }
  return mass;
};
