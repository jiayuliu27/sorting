function split(array) {
  var middle;
  var left;
  var right;
  if (array.length < 2) {
    return array;
  } else {

    middle = Math.floor(array.length/2);
    left = array.slice(0,middle);
    right = array.slice(middle);

    return [left,right];
  }

}

function mergeSort(array) {

  // if (array.length < 2) {
  //   return array;
  // }
  //
  // var result = [];
  // var splitArr = split(array);
  // var leftArr = splitArr[0];
  // var rightArr = splitArr[1];
  //
  // var leftIndex = 0;
  // var rightIndex = 0;
  //
  // while (leftIndex < leftArr.length && rightIndex < rightArr.length) {
  //   if (leftArr[leftIndex] < rightArr[rightIndex]) {
  //     result.push(leftArr[leftIndex]);
  //     leftIndex++;
  //   } else {
  //     result.push(rightArr[rightIndex]);
  //     rightIndex++;
  //   }
  // }

    var splitArr = split(array);
    var leftArr = splitArr[0];
    var rightArr =splitArr[1];
    // var result = [];
    console.log(splitArr);
    if(leftArr.length > 0) {
      mergeSort(leftArr);
    }
    if(rightArr) {
      if(rightArr.length > 0) {
        mergeSort(rightArr);
      }
      var leftIndex = 0;

      while(rightArr.length && leftIndex < leftArr.length) {
        if(leftArr[leftIndex] > rightArr[0]) {
          leftArr.splice(leftIndex, 0, rightArr.shift());

        } else {
          ++leftIndex;
        }
      }
    }

  return leftArr;


}
