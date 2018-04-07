App = {};

document.addEventListener('DOMContentLoaded', function() {
  fetch("https://naerriel.github.io/XSolve-Task/data.json")
    .then(response => response.json())
    .then(json => {
      MyData = json;
      App.filteredData = MyData;
      App.sortedData = MyData;
      App.view.render(MyData);
      App.view.handlePaginationButtons();
      App.view.handleFilteringInput();
      App.view.handleSortingByColumns();
    });
});
