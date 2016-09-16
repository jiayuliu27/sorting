function partition(arr, left, right, pivot) {
	while(left <= right) {
		console.log(left, right, "while partition");
		while(arr[left] < pivot) {
			++left;
		}
		while(arr[right] > pivot) {
			--right;
		}
		console.log(left, right);
		if(arr[left] > pivot && arr[right] < pivot) {
			console(arr[left], arr[right]);
			var tmp = arr[left];
			arr[left++] = arr[right];
			arr[right--] = tmp;
			// arr[left], arr[right] = arr[right--], arr[left++];
			console.log("hello", arr[left], arr[right]);
		} 
	}
	return left;

}

function quickSort(arr, left = 0, right = -1, comp = less) {
	
	if(right === -1) {
		right = arr.length - 1;
	}

	if(right <= left) {
		return arr;
	}
	// middle elt as pivot
	var pivot = Math.floor((right - left) / 2); //Math.floor(Math.random * (arr.length - 1));
	var part = partition(0, arr.length, pivot);
	console.log(part, pivot, arr);
	if(left < part - 1) {
		//quickSort(arr, left, part - 1);
	}
	if(part < right) {
		// quickSort(arr, part, right);
	}

}