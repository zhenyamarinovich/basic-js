const CustomError = require("../extensions/custom-error");

module.exports = function repeater(str, options) {
    
    if (typeof options['separator'] === "undefined") {
        options['separator'] = '+';
    }
    if (typeof options['additionSeparator'] === "undefined") {
        options['additionSeparator'] = "";
        
    }

    if(typeof options['addition'] === "undefined"){
        options['addition'] = "";
    }
    
    if(typeof options['repeatTimes'] !== "number" && typeof options['additionRepeatTimes'] !== "number") {
        return str + options['addition'];
    } else {
        let repeatStr="";
        repeatStr = (str+(options['addition']+options['additionSeparator']).repeat(options['additionRepeatTimes']-1)
        +options['addition']+options['separator']).repeat(options['repeatTimes']);
        return repeatStr.substring(0,repeatStr.length-options['separator'].length)
    }
};
