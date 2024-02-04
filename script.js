function generateTable() {
    // Get the user-entered number
    var number = document.getElementById("numberInput").value  * document.getElementById("numberInput2").value;

    var divident = document.getElementById("numberInput").value;

    var divisor = document.getElementById("numberInput2").value;

    // Validate the input
    if (!number || isNaN(number) || number <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Generate the table
    var tableHTML = "<h2>Table for " + divident+"/"+ divisor + "</h2><table border='1'><tr><th>N</th><th>M</th><th>A</th><th>Q</th><th>Operation</th></tr>";
    for (var i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + i + "</td><td>" + (i * number) + "</td><td>" + i + "</td></tr>";
    }
    tableHTML += "</table>";

    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}
