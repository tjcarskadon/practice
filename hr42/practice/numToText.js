function numToText(input,result) {
 
  var nums = ["zero","one","two","three","four","five","six","seven","eight","nine"];
  result = result || "";

  var checkMe = input.slice(0,1);
  input = input.slice(1,input.length);

  if(checkMe.search(/\d/) !== -1) {
      result+= nums[+checkMe];
  } else {
    result += checkMe;
  }
    
  if(input === '') {
    return result;
  } else {
    return numToText(input, result);
  }
}
console.log(numToText("h3ll0"));  //hthreellzero
console.log(numToText("1234567809")); //onetwothreefourfivesixseveneightzeronine