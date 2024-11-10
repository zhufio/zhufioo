const wrestlerData1 = [
        [1, "Bops Rox", "12 - 3 - 0", 26, 18, 0, "Benjamin Bops", "Will Rox"],
        [2, "Fred Bones Thaddeus", "12 - 3 - 0", 25, 14, 0, "Frostbite Fred Bones", "Thaddeus Jay"],
        [3, "Hero Cole", "10 - 5 - 0", 22, 9, 0, "Hero Cho", "Cole Castor"],
        [4, "Kendrick Trajanboy", "9 - 6 - 0", 22, 6, 0, "Trajanboy Kendrick", "Bush"],
        [5, "The Kid Drago", "9 - 6 - 0", 21, 6, 0, "The Kid", "Mason Drago"],
        [6, "Isaac OOO", "8 - 7 - 0", 20, 1, 0, "Indestructible Isaac", "Owen Owl Oxley"],
        [7, "Heat Zasx", "8 - 7 - 0", 19, 0, 0, "Heat", "Zack Task"],
        [8, "Blank Minty", "8 - 7 - 0", 18, -1, 0, "Minty Mania", "Blank Shadow"],
        [9, "Diego Ed", "7 - 8 - 0", 16, -2, 0, "Diego Torres", "Edwardo"],
        [10, "Spike Papaya", "7 - 8 - 0", 16, -3, 0, "Spike Cowboy", "Uber Squeezed Papaya"],
        [11, "Moon Jet", "7 - 8 - 0", 16, -4, 0, "Aiden Jet", "Kyle Moon"],
        [12, "Cookie Deez", "6 - 9 - 0", 18, -3, 0, "Cooki's Monster", "Deez"],
        [13, "Casual Rocket", "6 - 9 - 0", 16, -5, 0, "Casual Carlton", "Rocket Head"],
        [14, "Otunga Reyes", "6 - 9 - 0", 15, -7, 0, "Jason Otunga", "Ralph Reyes"],
        [15, "The BLT Gary", "3 - 12 - 0", 11, -13, 0, "The BLT Cupcake", "Gary Dallas"],
        [16, "Lando Xander", "2 - 13 - 0", 11, -16, 0, "Noah Landon", "Xander Velvet"]
      ];
  function generateTableData(data, tableId) {
    const tableBody = document.querySelector(`#${tableId} tbody`);
    tableBody.innerHTML = ''; // Clear any existing rows
    data.forEach(row => {
        let tr = document.createElement("tr");
        row.forEach(cell => {
            let td = document.createElement("td");
            td.textContent = cell;
            tr.appendChild(td);
        });
        tableBody.appendChild(tr);
    });
}

// Populate tables with wrestler data
generateTableData(wrestlerData1, 'data-table1');

// Function to sort table columns
function sortTable(n, tableId) {
    const table = document.getElementById(tableId);
    let rows = Array.from(table.querySelectorAll("tbody tr"));
    let isAscending = table.dataset.sortOrder === 'asc';
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.children[n].textContent.trim();
        const cellB = rowB.children[n].textContent.trim();

        // Check if the cell content is a number, including negative numbers
        const valueA = !isNaN(cellA) ? parseFloat(cellA) : cellA;
        const valueB = !isNaN(cellB) ? parseFloat(cellB) : cellB;

        // Sort numerically if both values are numbers, else use localeCompare for strings
        if (typeof valueA === 'number' && typeof valueB === 'number') {
            return isAscending ? valueA - valueB : valueB - valueA;
        } else {
            return isAscending 
                ? valueA.localeCompare(valueB, undefined, {numeric: true}) 
                : valueB.localeCompare(valueA, undefined, {numeric: true});
        }
    });
    
    // Toggle sort order for next click
    table.dataset.sortOrder = isAscending ? 'desc' : 'asc';
    
    // Append sorted rows back to the table body
    rows.forEach(row => table.querySelector("tbody").appendChild(row));
}
