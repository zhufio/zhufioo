// Updated wrestler data with Start offseason values
const wrestlerData = [
    ["7cA", "7cB", "7cA", "4sB", "new5sB", "x+1"], // Example row with Start offseason values
    ["8cA", "8cB", "8cA", "7cB", "new5sA", "x+2"],
    ["3sA", "3sB", "3sA", "8cB", "new6sB", "x+3"],
    ["4sA", "4sB", "4sA", "3sB", "new6sA", "x+4"],
    ["5sA", "5sB", "Draft 1", "Draft 5", "new7sB", "x+5"],
    ["6sA", "6sB", "Draft 2", "Draft 6", "new7sA", "x+6"],
    ["7sA", "7sB", "Draft 3", "Draft 7", "new8sB", "x+7"],
    ["8sA", "8sB", "Draft 4", "Draft 8", "new8sA", "x+8"]
];

// Populate the table with data
const tableBody = document.querySelector("#data-table tbody");

wrestlerData.forEach(rowData => {
    const row = document.createElement("tr");
    rowData.forEach(cellData => {
        const cell = document.createElement("td");
        cell.textContent = cellData;
        row.appendChild(cell);
    });
    tableBody.appendChild(row);
});


