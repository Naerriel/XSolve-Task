App = {};

document.addEventListener('DOMContentLoaded', function() {
  fetch("https://naerriel.github.io/XSolve-Task/data.json", function(text){
    MyData = JSON.parse(text);
    App.sortedData = MyData;
    App.filteredData = MyData;
  });
  App.view.render(MyData);
  App.view.handlePaginationButtons();
  App.view.handleFilteringInput();
  App.view.handleSortingByColumns();
});
