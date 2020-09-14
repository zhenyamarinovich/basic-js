const CustomError = require("../extensions/custom-error");

module.exports = class DepthCalculator {
  calculateDepth(arr) {
    let depth = 0;
    if (Array.isArray(arr)) {
      depth++;
      for (let i = 0; i < arr.length; i++) {
        if (Array.isArray(arr[i])) {
          depth += this.calculateDepth(arr.flat());
          break;
        }
      }
      return depth;
    }
  }
};
