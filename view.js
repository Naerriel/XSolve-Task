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

  const getTableHeaderHTML = function() {
    return `
      <tr>
          <th class="idHeader">Id</th>
          <th class="firstNameHeader">First Name</th>
          <th class="lastNameHeader">Last Name</th>
          <th class="dateOfBirthHeader">Date of Birth</th>
          <th class="companyHeader">Company</th>
          <th class="noteHeader">Note</th>
      </tr>
    `;
  }

  const renderPage = function(filteredData, pageNum) {
    console.log(filteredData);
    let code = getTableHeaderHTML();
    for(let nr = (pageNum - 1) * maxResultsOnPage;
      nr < pageNum * maxResultsOnPage && nr < filteredData.length;
      nr++){
      code += getTableRowHTML(filteredData[nr]);
    }
    $(".usersDataTable").html(code);
  }

  const renderPagination = function(numOfElements) {
    const numOfPages = Math.ceil(numOfElements / maxResultsOnPage);
    let code = "<a>&laquo</a>";
    for(let pageNum = 1; pageNum <= numOfPages; pageNum++){
      code += `<a class="pageButton" id='page${pageNum}'>${pageNum}</a>`;
    }
    code += "<a>&raquo</a>";
    $(".pagination").html(code);
  }

  App.view.render = function(filteredData) {
    renderPage(filteredData, 1);
    renderPagination(filteredData.length)
  }

  App.view.handlePaginationButtons = function() {
    $(".pagination").on("click", ".pageButton", function() {
      const pageNr = this.id.replace('page', '');
      renderPage(MyData, pageNr);
      //Replace to filtered data!
    });
  }

  App.view.handleFilteringInput = function(){
    const startFiltering = function(){
      const attribute = $(".select-attribute").val();
      const key = $(".filter").val().toLowerCase();
      App.filteredData = App.controller.filterData(key, attribute);
      App.view.render(App.filteredData);
    }
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
    const headerClasses = [".idHeader", ".firstNameHeader", ".lastNameHeader",
      ".dateOfBirthHeader", ".companyHeader", ".noteHeader"];
    for(let classNr in headerClasses){
      const className = headerClasses[classNr];
      const element = $(className);
      element.click(function(){
        if(!(element.hasClass("activeUp") || element.hasClass("activeDown"))){
          clearActives();
          element.addClass("activeDown");
        } else if(element.hasClass("activeDown")){
          element.removeClass("activeDown");
          element.addClass("activeUp");
        } else if(element.hasClass("activeUp")){
          element.removeClass("activeUp");
        }
      });
    }
  }

})();
