function numToText(input) {
 
  var nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  var result ="";
  var prevChar = "";
  var wasNum = false;

  var checkMe = input.slice(0,1);
  input = input.slice(1,input.length);
  
  if(checkMe === '') {
    return result;
  }

  if(checkMe.search(/\d/) !== -1) {
      result+= nums[+checkMe];

  } else {
    result += checkMe;
  }
  
  prevChar = checkMe;
  numToText(input);

  }

return result;
}

console.log(numToText("h3ll0"));
console.log(numToText("1234567809"));