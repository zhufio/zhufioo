const wrestlerData1 = [
        [1, "Hero Coles", "6 - 1 - 0", 12, 6, 0, "Hero Cho", "Cole Castor", "WLWWWWW"],
        [2, "KT", "5 - 2 - 0", 12, 6, 0, "Trajanboy", "Kendrick Bush", "WWWWWLL"],
        [3, "Task: Heat", "5 - 2 - 0", 11, 7, 0, "Heat", "Zack Task", "WWLWLWW"],
        [4, "Indestructible Os", "3 - 4 - 0", 9, 0, 0, "Indestructible Isaac", "Owen Owl Oxley", "LLLWWWL"],
        [5, "Frostbite Jays", "3 - 4 - 0", 8, -2, 0, "Frostbite Fred Bones", "Thaddeus Jay", "LLWLLWW"],
        [6, "Rox Bops", "3 - 4 - 0", 6, -3, 0, "Benjamin Bops", "Will Rox", "WWLLWLL"],
        [7, "Minty Blanks", "2 - 5 - 0", 4, -8, 0, "Minty Mania", "Blank Shadow", "LWLLLLW"],
        [8, "Drago Kids", "1 - 6 - 0", 7, -6, 0, "The Kid", "Mason Drago", "LLWLLLL"]
      ];

const wrestlerData2 = [
        [1, "Moon Jets", "6 - 1 - 0", 13, 8, 0, "Aiden Jet", "Kyle Moon", "LWWWWWW"],
        [2, "Uber Cowboys", "4 - 3 - 0", 10, 2, 0, "Spike Cowboy", "Uber Squeezed Papaya", "LWLLWWW"],
        [3, "Xander Landon", "4 - 3 - 0", 10, 1, 0, "Noah Landon", "Xander Velvet", "WLWLLWW"],
        [4, "Otunga Reyes", "4 - 3 - 0", 8, -2, 0, "Jason Otunga", "Ralph Reyes", "WLWWWLL"],
        [5, "Casual Rockets", "3 - 4 - 0", 9, 0, 0, "Casual Carlton", "Rocket Head", "LWLWWLL"],
        [6, "Los Gloriosos", "3 - 4 - 0", 8, -1, 0, "Diego Torres", "Edwardo", "LLLWLWW"],
        [7, "Cookie Deez", "3 - 4 - 0", 7, -1, 0, "Cooki's Monster", "Deez", "WWWLLLL"],
        [8, "The BLT Gary", "1 - 6 - 0", 6, -7, 0, "The BLT Cupcake", "Gary Dallas", "WLLLLLL"]
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
generateTableData(wrestlerData2, 'data-table2');

// Function to sort table columns
function sortTable(n, tableId) {
    const table = document.getElementById(tableId);
    let rows = Array.from(table.querySelectorAll("tbody tr"));
    let isAscending = table.dataset.sortOrder === 'asc';
    
    rows.sort((rowA, rowB) => {
        const cellA = rowA.children[n].textContent;
        const cellB = rowB.children[n].textContent;
        return isAscending 
            ? cellA.localeCompare(cellB, undefined, {numeric: true}) 
            : cellB.localeCompare(cellA, undefined, {numeric: true});
    });
    
    table.dataset.sortOrder = isAscending ? 'desc' : 'asc';
    
    rows.forEach(row => table.querySelector("tbody").appendChild(row));
}