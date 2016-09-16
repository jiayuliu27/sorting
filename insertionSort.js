
function less(a, b) {
	return a < b;
}

function insertionSort(arr, comp = less) {
  for(var i = 1; i < arr.length; ++i) {
    var j = i - 1, sorted = true;
    while(j >= 0 && comp(arr[i], arr[j])) {
      if(sorted) {
        sorted = false;
      }
      --j;
    }
    if(!sorted) {
      arr.splice(j + 1, 0, arr[i]);
      arr.splice(i + 1, 1);     
    }
  }
  return arr;
}