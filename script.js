//!initial values
var selectedRow = null;
//!form submit logic
function onFormSubmit(e) {
    event.preventDefault();
  var formData = readFormData();
  if (selectedRow == null) {
    insertNewRecord(formData);
  } else {
    updateRecord(formData);
  }
  resetForm();
}
//!get method(Retriving the data)
function readFormData() {
  var formData = {};
  formData["firstName"] = document.getElementById("firstName").value;
  formData["lastName"] = document.getElementById("lastName").value;
  formData["email"] = document.getElementById("email").value;
  formData["comment"] = document.getElementById("comment").value;
  if (document.getElementById("yes_sub").value == "Subscribed") {
    formData["subscribe"] = document.getElementById("yes_sub").value;
  }
  else {formData["subscribe"] = document.getElementById("no_sub").value;};
  return formData;
}

//!insert the data (Post method)
function insertNewRecord(data) {
  var table = document
    .getElementById("contactList")
    .getElementsByTagName("tbody")[0];
  var newRow = table.insertRow(table.length);
  cell1 = newRow.insertCell(0);
  cell1.innerHTML = data.firstName;
  cell2 = newRow.insertCell(1);
  cell2.innerHTML = data.lastName;
  cell3 = newRow.insertCell(2);
  cell3.innerHTML = data.email;
  cell4 = newRow.insertCell(3);
  cell4.innerHTML = data.comment;
  cell5 = newRow.insertCell(4);
  cell5.innerHTML = data.subscribe;
  cell5 = newRow.insertCell(5);
  cell5.innerHTML = `<button onClick="onEdit(this)">Edit</button> <button onClick = "onDelete(this)">Delete</button>`;
}

//!edit and update the data (Update method)
//editing the data(get)
function onEdit(td) {
  selectedRow = td.parentElement.parentElement;
  document.getElementById("firstName").value = selectedRow.cells[0].innerHTML;
  document.getElementById("lastName").value = selectedRow.cells[1].innerHTML;
  document.getElementById("email").value = selectedRow.cells[2].innerHTML;
  document.getElementById("comment").value = selectedRow.cells[3].innerHTML;
  document.getElementById("subscribe").value = selectedRow.cells[4].innerHTML;
  document.getElementById("yes_sub").value = ""
}

//updating the data
function updateRecord(formData) {
  selectedRow.cells[0].innerHTML = formData.firstName;
  selectedRow.cells[1].innerHTML = formData.lastName;
  selectedRow.cells[2].innerHTML = formData.email;
  selectedRow.cells[3].innerHTML = formData.comment;
  selectedRow.cells[4].innerHTML = formData.subscribe;
}

//!deleting the data (delete method)
//delete the data
function onDelete(td) {
  if (confirm("Are you certain you want to delete this data?")) {
    row = td.parentElement.parentElement;
    document.getElementById("contactList").deleteRow(row.rowIndex);
    resetForm();
  }
}

//!reseting the values in form
function resetForm() {
  document.getElementById("firstName").value = "";
  document.getElementById("lastName").value = "";
  document.getElementById("email").value = "";
  document.getElementById("comment").value = "";
  document.getElementById("yes_sub").value = ""
  document.getElementById("no_sub").value = "";
  selectedRow = null;
}

function myFunction() {
  var x = document.getElementById("myTopnav");
  if (x.className === "topnav") {
    x.className += " responsive";
  } else {
    x.className = "topnav";
  }
}