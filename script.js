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