const CustomError = require("../extensions/custom-error");

class VigenereCipheringMachine {
  constructor(boolean = true){
    this.flag = boolean;
  }
  encrypt(message, key) {
    if(!message || !key){
      throw new Error();
    }

    message = message.toUpperCase();
    key = key.toUpperCase();

    let encrypyStr = "";
    let offset = "A".charCodeAt(0);
    let indexKey=0;
    let sizeAlphabet = 26;

    for(let i=0; i<message.length; i++) {
      if(message.charCodeAt(i)<offset || message.charCodeAt(i)>offset + sizeAlphabet){
        encrypyStr += message[i];
      } else{
        let index = ((message.charCodeAt(i) - offset + key.charCodeAt(indexKey) - offset) % sizeAlphabet) + offset;
        encrypyStr += String.fromCharCode(index);
        indexKey++;
        if(indexKey === key.length){
          indexKey=0;
        }
      }
      
    }
    return this.flag ? encrypyStr : encrypyStr.split("").reverse().join("");
   
  }    
  decrypt(string, key) {
    if ( !string || !key ) {
      throw new Error("error");
  }

  string = string.toUpperCase();
  key = key.toUpperCase();

  const offset = "A".charCodeAt(0);
  const  sizeAlphabet = 26;
  let message = "";
  let keyIndex = 0;

  for ( let i = 0; i < string.length; i++) { 
      if ( string.charCodeAt(i) < offset || string.charCodeAt(i) > offset +  sizeAlphabet ) {
          message += string[i];
      } else {
          let index = (((string.charCodeAt(i) - offset) +  sizeAlphabet - (key.charCodeAt(keyIndex) - offset)) %  sizeAlphabet) + offset;
          message += String.fromCharCode(index);
          keyIndex++;
          if(keyIndex == key.length){
              keyIndex = 0;
          }
         
      }
     
  }
  return this.flag ? message : message.split("").reverse().join("");
  }
}

module.exports = VigenereCipheringMachine;
