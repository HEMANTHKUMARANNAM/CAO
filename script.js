function generateTable() {
    // Get the user-entered number
    var number = document.getElementById("numberInput").value  * document.getElementById("numberInput2").value;

    // Validate the input
    if (!number || isNaN(number) || number <= 0) {
        alert("Please enter a valid positive number.");
        return;
    }

    // Generate the table
    var tableHTML = "<h2>Table for " + number + "</h2><table border='1'><tr><th>Multiplier</th><th>Result</th></tr>";
    for (var i = 1; i <= 10; i++) {
        tableHTML += "<tr><td>" + i + "</td><td>" + (i * number) + "</td></tr>";
    }
    tableHTML += "</table>";

    // Display the table
    document.getElementById("tableContainer").innerHTML = tableHTML;
}
