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
    expect(split([1, 2, 3, 4, 5, 6])).toEqual([[1, 2, 3], [4, 5, 6]]);
  });

  it('is able to split array with odd # elts', function() {
    expect(split([1, 23, 4, 5, 13, 6, 312])).toEqual([[1, 23, 4], [5, 13, 6, 312]]);
  })

});

describe('Merge', function() {
  it('merge test - right longer', function() {
    expect(merge([1, 3], [2, 5, 6])).toEqual([1, 2, 3, 5, 6]);
  });

  it('left longer', function() {
    expect(merge([1, 5, 234, 250], [2, 8, 100])).toEqual([1, 2, 5, 8, 100, 234, 250]);
  });

  it('lengths equal', function() {
    expect(merge([1, 2, 3], [4, 5, 6])).toEqual([1, 2, 3, 4, 5, 6]);
  });

  it('left all greater', function() {
    expect(merge([100, 101, 102], [1, 2, 3])).toEqual([1, 2, 3, 100, 101, 102]);
  });

  it('left empty', function() {
    expect(merge([], [1])).toEqual([1]);
  });
  it('right empty', function() {
    expect(merge([1], [])).toEqual([1]);
  });
  it('both empty', function() {
    expect(merge([], [])).toEqual([]);
  });
});

describe('Merge Sort', function(){
  // it('make sure split() is called', function(){
  //   // monkey patching
  //   var oldSplit = split;
  //   var splitCalled = false;
  //   split = function() {
  //     splitCalled = true;
  //     return oldSplit(this.Array.from(arguments));
  //   }
  //   mergeSort([1, 2, 3, 4, 5]);
  //   expect(splitCalled).toBeTruthy();
  // });

  it('even number of elts', function() {
    expect(mergeSort([4, 2, 1, 3])).toEqual([1, 2, 3, 4]);
  });

  it('is able to merge odd number of elts in array', function() {
    expect(mergeSort([4, 2, 1, 3, 5])).toEqual([1, 2, 3, 4, 5]);
  });
  it('is able to merge empty array', function() {
    expect(mergeSort([])).toEqual([]);
  });
  it('is able to merge one elt array', function() {
    expect(mergeSort([1])).toEqual([1]);
  });
});
