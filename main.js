App = {};

document.addEventListener('DOMContentLoaded', function() {
  App.repository.getData()
    .then(json => {
      App.MainData = json;
      App.filteredData = App.MainData;
      App.sortedData = App.MainData;
      App.view.render(App.MainData);
      App.view.handlePaginationButtons();
      App.view.handleFilteringInput();
      App.view.handleSortingByColumns();
    });
});
