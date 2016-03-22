function numToText(input) {
//create some kind of object or holder for the numbers to match
//concatenate numbers over 20 and again over 100
//write this first with a internal helper function 

//split the first letter, check it.  If it isn't a number then 
//concate it to the result string.  If it is a number then get the word 
//version of the number.  Then call the function again with the input.
//base case is if the input string is empty.

//use a regex to see if the value is a number.  

var numWords = {
  0: "zero",
  1: "one",
  2: "two",
  3: "three",
  4: "four",
  5: "five",
  6: "six",
  7: "seven",
  8: "eight",
  9: "nine",
  10: "ten"
};
var result ="";
  function parse(str) {
    var checkMe = str.slice(0,1);
    str = str.slice(1,str.length);
    
    if(checkMe === '') {
      console.log(result);
      return result;
    }

    if(checkMe.search(/\d/) !== -1) {
        result+= numWords[+checkMe];
    } else {
      result += checkMe;      
    }
    
    parse(str);

  }
parse(input);
}
numToText("h3ll0");