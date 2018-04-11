(function(){
  App.utils = {};

  const merge = function(leftSide, rightSide, comparator){
    let result = [];
    let leftIt = 0;
    let rightIt = 0;
    while(leftIt < leftSide.length && rightIt < rightSide.length){
      if(comparator(leftSide[leftIt], rightSide[rightIt])){
        result.push(leftSide[leftIt]);
        leftIt++;
      } else {
        result.push(rightSide[rightIt]);
        rightIt++;
      }
    }
    while(leftIt < leftSide.length){
      result.push(leftSide[leftIt]);
      leftIt++;
    }
    while(rightIt < rightSide.length){
      result.push(rightSide[rightIt]);
      rightIt++;
    }
    return result;
  }

  App.utils.mergeSort = function(array, comparator){

    if(array.length > 1){
      const halfLength = Math.floor(array.length / 2);
      let rightSide = array.slice();
      let leftSide = rightSide.splice(0, halfLength);

      leftSide = App.utils.mergeSort(leftSide, comparator);
      rightSide = App.utils.mergeSort(rightSide, comparator);
      return merge(leftSide, rightSide, comparator);
    } else {
      return array;
    }
  }
})();
