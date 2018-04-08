(function(){
  App.utils = {};

  App.utils.filterData = function(data, key, attribute){
    key = key.toLowerCase();
    let result = [];
    for(let it in data){
      if(data[it][attribute].toString().toLowerCase().includes(key)){
        result.push(data[it]);
      }
    }
    return result;
  }

  App.utils.lowerAlfaNum = function(first, second){
    /* If arguments are strings, they will be compared as strings,
     * lexicographically in complexity O(maxLength)
     * It can be implemented in O(log(maxLength)) with
     * creating hashes once in O(maxlength).
     */
    return first <= second;
  }

  App.utils.beforeDate = function(date1, date2){
    date1 = moment(date1.replace(" ", "T"), "DD-MM-YYYY HH:mm");
    date2 = moment(date2.replace(" ", "T"), "DD-MM-YYYY HH:mm");
    return date2.isAfter(date1);
  }

  App.utils.afterDate = function(date1, date2){
    date1 = moment(date1.replace(" ", "T"), "DD-MM-YYYY HH:mm");
    date2 = moment(date2.replace(" ", "T"), "DD-MM-YYYY HH:mm");
    return date1.isAfter(date2);
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

    if(array.length > 1){
      const halfLength = Math.floor(array.length / 2);
      let rightSide = array.slice();
      let leftSide = rightSide.splice(0, halfLength);

      leftSide = App.utils.mergeSort(leftSide, attribute, comparator);
      rightSide = App.utils.mergeSort(rightSide, attribute, comparator);
      return merge(leftSide, rightSide, attribute, comparator);
    } else return array;
  }
})();
