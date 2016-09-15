describe('Split Array function', function() {
  it('is able to split an array into two halves -- empty array', function() {
    expect(split([])).toEqual([]);
  });
  it('split one elt', function() {
    expect(split([1])).toEqual([1]);
  });
  it('is able to split an array into two halves', function() {
    expect(split([1, 2])).toEqual([[1], [2]]);
  });
  it('is able to split an array into two halves', function() {
    expect(split([1, 2, 3, 4])).toEqual([[1, 2], [3, 4]]);
  });

});

describe('Merge Sort', function(){
  it('make sure split() is called', function(){
    expect(split).toHaveBeenCalled();
  });

  it('is able to merge two sorted arrays into one sorted array', function() {
    expect(mergeSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
  });

  it('is able to merge odd number of elts in array', function() {
    expect(mergeSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('is able to merge empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
});
