function split(array) {
  if (array.length < 2) {
    return array;
  } else {
    var middle = Math.floor(array.length/2);
    return [array.slice(0, middle), array.slice(middle)];
  }

}
function lessThan(a, b) {
  return a > b;
}
/*
  Required: both left and right are already sorted
  Modified: left
  Expected: right gets merged into left in sorted order
*/
function merge(left, right, comp = lessThan) {
  var lIndex = 0;
  while(right.length) {
    if(lIndex < left.length) {
      if(comp(left[lIndex], right[0])) {
        left.splice(lIndex, 0, right.shift());
      } 
      ++lIndex;
    } else {
      left.push(right.shift());
    }    
  }
  return left;
}

function mergeSort(array, comp = lessThan) {
  // base case
  if(array.length < 2) {
    return array;
  }
  // recursive steps
  var leftArr = mergeSort(split(array)[0], comp);
  var rightArr = mergeSort(split(array)[1], comp);
  
  // merge and return
  return merge(leftArr, rightArr, comp);


}
