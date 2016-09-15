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

function merge(left, right) {
  console.log("hii");
  var lIndex = 0;
  while(lIndex < left.length) {
    if(left[lIndex] > right[0]) {
      left = left.splice(lIndex, 0, right.shift());
    }
    ++lIndex;
    
  }
  console.log(left);
  return left;
}

function mergeSort(array) {
  console.log("hello");
  if(array) {
    return array;
  }
  
  return merge(mergeSort(split(array)[0]), mergeSort(split(array)[1]));

}
