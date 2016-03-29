//write a function that takes and ordered list and a number and returns the index of the ordered list
//do this is a binary recursive fashion.


function binSearch(list,target) {
  var result;
  var middleIndex = Math.round(list.length/2);
  var middleValue = list[middleIndex];
  var shortList = [];
  

  if(target === middleValue) {
    result = middleIndex;
    return result;
  }
  if(target > middleValue) {
    shortList = list.slice(middleIndex);
    binSearch(shortList,target);
  } else {
    shortList = list.slice(0,middleIndex);
    binSearch(shortList,target);
  }
}

console.log(binSearch([1,2,3,4],4)); //3