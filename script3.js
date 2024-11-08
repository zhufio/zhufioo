const wrestlerData1 = [
    [1, "Hero Coles", "6 - 1 - 0", 13, 7, 0, "Hero Cho", "Cole Castor", "WLWWWWW"],
    [2, "Indestructible Os", "5 - 2 - 0", 11, 3, 0, "Indestructible Isaac", "Owen Owl Oxley", "LLLWWWL"],
    [3, "Uber Cowboys", "4 - 3 - 0", 9, 1, 0, "Spike Cowboy", "Uber Squeezed Papaya", "LWLLWWW"],
    [4, "KT", "3 - 4 - 0", 10, 1, 0, "Trajanboy", "Kendrick Bush", "WWWWWLL"],
    [5, "Moon Jets", "3 - 4 - 0", 8, -2, 1, "Aiden Jet", "Kyle Moon", "LWWWWWW"],
    [6, "Task: Heat", "3 - 4 - 0", 8, -2, 0, "Heat", "Zack Task", "WWLWLWW"],
    [7, "Rox Bops", "3 - 4 - 0", 7, -1, 0, "Benjamin Bops", "Will Rox", "WWLLWLL"],
    [8, "Frostbite Jays", "1 - 6 - 0", 5, -7, 0, "Frostbite Fred Bones", "Thaddeus Jay", "LLWLLWW"]
];

const wrestlerData2 = [
    [1, "Viridian Sail", "6 - 1 - 0", 12, 7, 0, "Mr Viridian", "Troy the Sailor", "WWLWLWW"],
    [2, "Otunga Velvet", "5 - 2 - 0", 10, 4, 0, "Jason Otunga", "Xander Velvet", "WWWWWLL"],
    [3, "Larstal", "4 - 3 - 0", 9, 3, 1, "Lars Hamilton", "Crystal", "WWLLWLL"],
    [4, "The Mints", "4 - 3 - 0", 9, 3, 0, "The Kid", "Minty Mania", "WLWWWWW"],
    [5, "Prime Time", "4 - 3 - 0", 8, 2, 0, "Percy Primetime", "Reed Hall-Boyd", "LLLWWWL"],
    [6, "Land Dragons", "2 - 5 - 0", 6, -5, 0, "Noah Landon", "Mason Drago", "LWWWWWW"],
    [7, "Charming Draw", "2 - 5 - 0", 5, -6, 0, "Quickdraw Evan", "Warren Charming", "LLWLLWW"],
    [8, "Shadow Rays", "1 - 6 - 0", 4, -8, 0, "Blank Shadow", "Ralph Reyes", "LWLLWWW"]
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