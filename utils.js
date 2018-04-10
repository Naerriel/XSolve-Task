(function(){
  App.utils = {};

  const merge = function(leftSide, rightSide, attribute, comparator){
    let result = [];
    let leftIt = 0;
    let rightIt = 0;
    while(leftIt < leftSide.length && rightIt < rightSide.length){
      if(comparator(leftSide[leftIt][attribute], rightSide[rightIt][attribute])){
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

  App.utils.mergeSort = function(array, attribute, comparator){

    if(array.length > 1){
      const halfLength = Math.floor(array.length / 2);
      let rightSide = array.slice();
      let leftSide = rightSide.splice(0, halfLength);

      leftSide = App.utils.mergeSort(leftSide, attribute, comparator);
      rightSide = App.utils.mergeSort(rightSide, attribute, comparator);
      return merge(leftSide, rightSide, attribute, comparator);
    } else {
      return array;
    }
  }
})();
