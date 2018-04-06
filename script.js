document.addEventListener('DOMContentLoaded', function() {
  console.log(MyData);
  render(MyData);
});

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

const render = function(filteredData) {
  let code = getTableHeaderHTML();
  for(let number in filteredData){
    code += getTableRowHTML(filteredData[number]);
  }
  $(".usersDataTable").html(code);
}
