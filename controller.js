(function(){
  App.controller = {};

  App.controller.handleFilteringInput = function(){
    const filter = function(){
      const attribute = $(".select-attribute").val();
      const key = $(".filter").val().toLowerCase();
      App.filteredData = filterData(key, attribute);
      App.view.render(App.filteredData);
    }
    $(".filter").on("input", function(){
      filter();
    });
    $(".select-attribute").on("change", filter);
  }

  const filterData = function(key, attribute){
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
