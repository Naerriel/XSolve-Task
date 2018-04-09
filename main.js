App = {};

document.addEventListener('DOMContentLoaded', function() {
  App.repository.getData()
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
