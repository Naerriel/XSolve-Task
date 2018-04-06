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
        <th>Id</th>
        <th>First Name</th>
        <th>Last Name</th>
        <th>Date of Birth</th>
        <th>Company</th>
        <th>Note</th>
    </tr>
  `;
}

const renderPage = function(filteredData, pageNum) {
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

const render = function(filteredData) {
  renderPage(filteredData, 1);
  renderPagination(filteredData.length)
}

const handlePaginationButtons = function() {
  $(".pagination").on("click", ".pageButton", function() {
    const pageNr = this.id.replace('page', '');
    renderPage(MyData, pageNr);
    //Replace to filtered data!
  });
}

document.addEventListener('DOMContentLoaded', function() {
  render(MyData);
  handlePaginationButtons();
});

