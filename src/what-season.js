const CustomError = require("../extensions/custom-error");

module.exports = function getSeason(date) {
  if (!date) {
    return "Unable to determine the time of year!";
  }
  try {
    date.getTime();
  } catch (e) {
    throw new Error(e);
  }

  if (date.getMonth() >= 2 && date.getMonth() <= 4) {
    return "spring";
  } else if (date.getMonth() >= 5 && date.getMonth() <= 7) {
    return "summer";
  } else if (date.getMonth() >= 8 && date.getMonth() <= 10) {
    return "autumn";
  } else if (
    date.getMonth() == 0 ||
    date.getMonth() == 1 ||
    date.getMonth() == 11
  ) {
    return "winter";
  }
};
