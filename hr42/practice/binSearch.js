//write a function that takes and ordered list and a number and returns the index of the ordered list
//do this is a binary recursive fashion.


function binSearch(list,target,indexArray,flag) {
  var result;
  var middleIndex = Math.round(list.length/2);
  var middleValue = list[middleIndex];
  var shortList = [];
  var flag = flag || "";
  indexArray = indexArray || [];
  

  if(target === middleValue) {
    if(indexArray.length > 0) {
      if(flag === "g") {
        result = indexArray[indexArray.length-1];
      } else {
        //left off here, need to address how we are getting this index
        result = indexArray[1];
      }
      return result;
    } else {
      return middleIndex;
    }
  }
  if(target > middleValue) {
    shortList = list.slice(middleIndex);
    for (var i =0; i<shortList.length;i++){
      indexArray.push(middleIndex);
      middleIndex++;
    }
    flag = "g";
    return binSearch(shortList,target, indexArray,flag);
  } else {
    shortList = list.slice(0,middleIndex);
     if(indexArray.length === 0) {
      for (var i = 0; i<shortList.length;i++){
        indexArray.push(i);
      }
    } else {
      indexArray = indexArray.slice(indexArray.length - shortList.length);
    }
    flag = "l";
    return binSearch(shortList,target,indexArray,flag);
  }
}

console.log(binSearch([1,2,3,4,5,6,7],4)); 