const CustomError = require("../extensions/custom-error");

module.exports = function calculateHanoi(disksNumber, turnsSpeed) {
  let numbers = {};
  numbers["turns"] = Math.pow(2, disksNumber) - 1;
  numbers["seconds"] = Math.floor(numbers.turns / (turnsSpeed / 3600));
  return numbers;
};
