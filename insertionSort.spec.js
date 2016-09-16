describe('Insertion Sort', function() {
	it('even number of elts', function() {
    expect(insertionSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
  });

  it('is able to merge odd number of elts in array', function() {
    expect(insertionSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });

  it('is able to merge empty array', function() {
    expect(insertionSort([])).toEqual([]);
  });
  
  it('is able to merge one elt array', function() {
    expect(insertionSort([1])).toEqual([1]);
  });
});