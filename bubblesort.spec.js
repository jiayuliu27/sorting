describe('Bubble Sort', function(){
  it('handles an empty array', function(){
    expect(bubbleSort([])).toEqual([]);
  });

  it('handles array with one item', function() {
    expect(bubbleSort([1])).toEqual([1]);
  });

  it('handles array with more than one elt', function()  {
    expect(bubbleSort([100, 35])).toEqual([35, 100]);
  });

  it('handles already sorted array', function() {
    expect(bubbleSort([1,2,3,4,5, 10])).toEqual([1,2,3,4,5, 10]);
  });

  it ('handles reversed array', function() {
    expect(bubbleSort([5,4,3,2,1, 11])).toEqual([1,2,3,4,5, 11]);
  });

  it ('handles scrambled array', function() {
    expect(bubbleSort([4,2,1,5,3,100])).toEqual([1,2,3,4,5, 100]);
  });

});
