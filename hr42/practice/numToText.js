function numToText(input) {
 
var nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];
var result ="";
var prevChar = "";
var wasNum = false;
 function parse(str) {
    var checkMe = str.slice(0,1);
    str = str.slice(1,str.length);
    
    if(checkMe === '') {
      return result;
    }

    if(checkMe.search(/\d/) !== -1) {
        result+= nums[+checkMe];

    } else {
      result += checkMe;
    }
    
    prevChar = checkMe;
    parse(str);

  }
parse(input);
return result;
}

console.log(numToText("h3ll0"));
console.log(numToText("1234567809"));