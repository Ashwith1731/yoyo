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
function searchStudent() {

    var search = document.getElementById("search").value.toLowerCase();

    var table = document.getElementById("studentTable");
    var rows = table.getElementsByTagName("tr");

    for (var i = 1; i < rows.length; i++) {

        var student = rows[i].innerText.toLowerCase();

        if (student.includes(search)) {
            rows[i].style.display = "";
        }
        else {
            rows[i].style.display = "none";
        }
    }
}