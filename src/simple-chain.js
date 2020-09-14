const CustomError = require("../extensions/custom-error");

const chainMaker = {
  chain: [],

  getLength() {
    return this.chain.length;
  },

  addLink(value) {
    this.chain.push(value);
    return this;
  },

  removeLink(position) {
    if (isNaN(position) || this.chain[position] === undefined) {
      this.chain = [];
      throw new Error();
    } else {
      this.chain.splice(position - 1, 1);
      return this;
    }
  },

  reverseChain() {
    this.chain.reverse();
    return this;
  },

  finishChain() {
    let strChain = "";
    for (let i = 0; i < this.getLength() - 1; i++) {
      strChain += "( " + this.chain[i] + " )~~";
    }
    strChain += "( " + this.chain[this.getLength() - 1] + " )";
    this.chain = [];
    return strChain;
  },
};

module.exports = chainMaker;
