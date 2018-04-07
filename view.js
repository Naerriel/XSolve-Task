(function(){
  App.view = {};
  const maxResultsOnPage = 5;

  const makeCell = function(text){
    return `<td>${text}</td>`;
  }

  const getTableRowHTML = function(personData) {
    let rowCode = "<tr>";
    for(let attribute in personData){
      rowCode += `<td>${personData[attribute]}</td>`;
    }
    rowCode += "<tr>";
    return rowCode;
  }

  const renderPage = function(filteredData, pageNum) {
    let code = "";
    for(let nr = (pageNum - 1) * maxResultsOnPage;
      nr < pageNum * maxResultsOnPage && nr < filteredData.length;
      nr++){
      code += getTableRowHTML(filteredData[nr]);
    }
    $(".usersDataBody").html(code);
  }

  const renderPagination = function(numOfElements) {
    const numOfPages = Math.ceil(numOfElements / maxResultsOnPage);
    let code = "";
    for(let pageNum = 1; pageNum <= numOfPages; pageNum++){
      code += `<a class="pageButton" id='page${pageNum}'>${pageNum}</a>`;
    }
    $(".pagination").html(code);
  }

  App.view.render = function(filteredData) {
    renderPage(filteredData, 1);
    renderPagination(filteredData.length)
  }

  App.view.handlePaginationButtons = function() {
    $(".pagination").on("click", ".pageButton", function() {
      const pageNr = this.id.replace('page', '');
      renderPage(App.filteredData, pageNr);
    });
  }

  const startFiltering = function(){
    const attribute = $(".select-attribute").val();
    const key = $(".filter").val().toLowerCase();
    App.filteredData = App.utils.filterData(key, attribute);
    App.view.render(App.filteredData);
  }

  App.view.handleFilteringInput = function(){
    $(".filter").on("input", function(){
      startFiltering();
    });
    $(".select-attribute").on("change", startFiltering);
  }

  const clearActives = function () {
    $(".activeDown").removeClass("activeDown");
    $(".activeUp").removeClass("activeUp");
  }

  App.view.handleSortingByColumns = function(){
    const startSorting = function(className, ascending){
      const attribute = className.replace("Header", "");
      let comparator;
      if(attribute === "dateOfBirth"){
        if(ascending){
          comparator = App.utils.beforeDate;
        } else {
          comparator = App.utils.afterDate;
        }
      } else { //It means that attribute is alphanumeric.
        if(ascending){
          comparator = App.utils.lowerAlfaNum;
        } else {
          comparator = App.utils.biggerAlfaNum;
        }
      }
      App.sortedData = App.utils
        .mergeSort(MyData, attribute, comparator);
      startFiltering();
    }

    $(".usersDataTable").on("click", "th", function(e){
      const element = $(e.target);
      const className = element.attr('class');
      if(!(element.hasClass("activeUp") || element.hasClass("activeDown"))){
        clearActives();
        startSorting(className, true);
        element.addClass("activeDown");
      } else if(element.hasClass("activeDown")){
        clearActives();
        startSorting(className.replace(" activeDown", "") , false);
        element.addClass("activeUp");
      } else if(element.hasClass("activeUp")){
        clearActives();
        App.sortedData = MyData;
        startFiltering();
      }
    });
  }
})();
