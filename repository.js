(function(){
  App.repository = {};

  App.repository.getData = function() {
    return new Promise((resolve, reject) => {
      fetch("https://naerriel.github.io/XSolve-Task/data.json")
        .then(response => resolve(response.json()));
    });
  }
})();
