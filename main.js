App = {};

document.addEventListener('DOMContentLoaded', function() {
  App.repository.getData()
    .then(json => {
      MainData = json;
      App.filteredData = MainData;
      App.sortedData = MainData;
      App.view.render(MainData);
      App.view.handlePaginationButtons();
      App.view.handleFilteringInput();
      App.view.handleSortingByColumns();
    });
});
