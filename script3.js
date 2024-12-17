const wrestlerData1 = [
    [1, "Hero Coles", "6 - 1 ", 13, 7, 0, "Hero Cho", "Cole Castor"],
    [2, "Indestructible Os", "5 - 2 ", 11, 3, 0, "Indestructible Isaac", "Owen Owl Oxley"],
    [3, "Moon Jets", "4 - 3 ", 10, 0, 0, "Aiden Jet", "Kyle Moon"],
    [4, "Uber Cowboys", "4 - 3 ", 9, 1, 0, "Spike Cowboy", "Uber Squeezed Papaya"],
    [5, "KT", "3 - 4 ", 10, 1, 0, "Trajanboy", "Kendrick Bush"],
    [6, "Task: Heat", "3 - 4 ", 8, -2, 0, "Heat", "Zack Task"],
    [7, "Rox Bops", "2 - 5", 5, -2, 0, "Benjamin Bops", "Will Rox"],
    [8, "Frostbite Jays", "1 - 6 ", 5, -7, 0, "Frostbite Fred Bones", "Thaddeus Jay"]
];

const wrestlerData2 = [
    [1, "Viridian Sail", "6 - 1 ", 12, 7, 0, "Mr Viridian", "Troy the Sailor"],
    [2, "Otunga Velvet", "5 - 2 ", 10, 4, 0, "Jason Otunga", "Xander Velvet"],
    [3, "Larstal", "4 - 3 ", 9, 3, 1, "Lars Hamilton", "Crystal"],
    [4, "The Mints", "4 - 3 ", 9, 3, 0, "The Kid", "Minty Mania"],
    [5, "Prime Time", "4 - 3 ", 8, 2, 0, "Percy Primetime", "Reed Hall-Boyd"],
    [6, "Land Dragons", "2 - 5 ", 6, -5, 0, "Noah Landon", "Mason Drago"],
    [7, "Charming Draw", "2 - 5 ", 5, -6, 0, "Quickdraw Evan", "Warren Charming"],
    [8, "Shadow Rays", "1 - 6 ", 4, -8, 0, "Blank Shadow", "Ralph Reyes"]
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
function openNav() {
    document.getElementById("mySidebar").style.width = "250px";
    document.getElementById("main").style.marginLeft = "250px";
  }
  
  function closeNav() {
    document.getElementById("mySidebar").style.width = "0";
    document.getElementById("main").style.marginLeft= "0";
  }