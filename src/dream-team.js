const CustomError = require("../extensions/custom-error");

module.exports = function createDreamTeam(members) {
  if (Array.isArray(members) === false) {
    return false;
  }
  let nameTeam = "";
  for (let i = 0; i < members.length; i++) {
    if (typeof members[i] === "string") {
      nameTeam += members[i].trim().charAt(0);
    }
  }
  return nameTeam.length > 0
    ? nameTeam.toUpperCase().split("").sort().join("")
    : false;
};
