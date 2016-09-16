function quickSort(arr, left = 0, right = null) {
      if(!right) {
            right = arr.length - 1;
      }
      var i = left, j = right;
      var tmp;
      var pivot = arr[Math.floor((left + right) / 2)];
      
      /* partition */
      while (i <= j) {
            while (arr[i] < pivot)
                  i++;
            while (arr[j] > pivot)
                  j--;
            if (i <= j) {
                  tmp = arr[i];
                  arr[i] = arr[j];
                  arr[j] = tmp;
                  i++;
                  j--;
            }
      };
 
      /* recursion */
      if (left < j)
            quickSort(arr, left, j);
      if (i < right)
            quickSort(arr, i, right);
      
      return arr;
}
