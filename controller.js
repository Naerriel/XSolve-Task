(function(){
  App.controller = {};

  App.controller.filterData = function(key, attribute){
    key = key.toLowerCase();
    let resultData = [];
    for(let nr in MyData){
      if(MyData[nr][attribute].toString().toLowerCase().includes(key)){
        resultData.push(MyData[nr]);
      }
    }
    return resultData;
  }
})();
