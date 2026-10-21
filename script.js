function addStudent() {

    var name = document.getElementById("name").value;
    var roll = document.getElementById("roll").value;
    var department = document.getElementById("department").value;

    var table = document.getElementById("studentTable");
    var row = table.insertRow();

    row.insertCell(0).innerHTML = name;
    row.insertCell(1).innerHTML = roll;
    row.insertCell(2).innerHTML = department;
}