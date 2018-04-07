(function(){
  App.utils = {};

  App.utils.filterData = function(key, attribute){
    key = key.toLowerCase();
    let resultData = [];
    for(let nr in App.sortedData){
      if(App.sortedData[nr][attribute].toString().toLowerCase().includes(key)){
        resultData.push(App.sortedData[nr]);
      }
    }
    return resultData;
  }

  App.utils.lowerAlfaNum = function(first, second){
    /*
     * If arguments are numbers they will be compared as numbers
     *
     * If they are strings, they will be compared as strings,
     * lexicographically in complexity O(maxLength)
     * It can be implemented in O(log(maxLength)) with
     * creating hashes once in O(maxlength).
     */
    return first <= second;
  }

  App.utils.cmpDate = function(date1, date2){
    //Code for comparing dates

  }

  App.utils.biggerAlfaNum = function(first, second){
    return first > second;
  }

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
    /*
     * This function can be optimized by avoiding of passing
     * arrays as arguments but creating a global array instead and
     * passing as arguments beginning and ending of interval.
     *
     * This solution however decreases code generality and is not needed
     */
    let rightSide = array.slice();
    if(rightSide.length > 1){
      const halfLength = Math.floor(rightSide.length / 2);
      let leftSide = rightSide.splice(0, halfLength);
      leftSide = App.utils.mergeSort(leftSide, attribute, comparator);
      rightSide = App.utils.mergeSort(rightSide, attribute, comparator);
      return merge(leftSide, rightSide, attribute, comparator);
    } else return rightSide;
  }
})();
