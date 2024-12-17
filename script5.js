const wrestlerData1 = [
    [1, "Otunga Velvet", "4 - 0 ", 8, 7, 0, "Jason Otunga", "Xander Velvet"],
    [2, "Viridian Sail", "3 - 1 ", 7, 4, 1, "Mr Viridian", "Troy the Sailor"],
    [3, "Uber Cowboys", "3 - 1", 7, 4, 0, "Spike Cowboy", "Uber Squeezed Papaya"],
    [4, "K T", "2 - 2 ", 5, -1, 0, "Trajanboy", "Kendrick Bush"],
    [5, "Task: Heat", "2 - 2", 4, -1, 0, "Heat", "Zack Task"],
    [6, "Hero Coles", "1 - 3", 3, -3, 0, "Hero Cho", "Cole Castor"],
    [7, "Indestructible Os", "1- 3", 3, -4, 0, "Indestructible Isaac", "Owen Owl Oxley"],
    [8, "Moon Jets", "0 - 4 ", 2, -6 , 0, "Aiden Jet", "Kyle Moon"]
    ];

const wrestlerData2 = [
    [1, "Bop Mania", "4 - 0", 8, 8, 0, "Benjamin Bops", "Minty Mania"],
    [2, "The Rockers", "3 - 1 ", 6, 4, 0, "Hakeem Kurr", "Rocket Head"],
    [3, "Crazy Casuals", "2 - 2", 5, 0, 0, "Pandemonium", "Casual Carlton"],
    [4, "Crystal Kids", "2 - 2 ", 4, 0, 0, "The Kid", "Crystal"],
    [5, "Rox Jay", "2 - 2 ", 4, -1, 0, "Thaddeus Jay", "Will Rox"],
    [6, "Frosty Hams", "2 - 2", 4, -2, 0, "Lars Hamilton", "Frostbite Fred Bones"],
    [7, "Gloryuri", "1 - 3", 3, -3, 0, "Andrew Yuri", "Edwardo"],
    [8, "Go Diegos", "0 - 4", 2, -6, 0, "Go Sea Balt", "Diego Torres"]
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