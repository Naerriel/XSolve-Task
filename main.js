App = {};
App.filteredData = MyData;

document.addEventListener('DOMContentLoaded', function() {
  App.view.render(MyData);
  App.view.handlePaginationButtons();
  App.view.handleFilteringInput();
  App.view.handleSortingByColumns();
});
