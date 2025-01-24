const wrestlerData1 = [
    [1, "Uber Cowboys", "6 - 1", 13, 9, 0, "Spike Cowboy", "Uber Squeezed Papaya"],
    [2,"Otunga Velvet", "5 - 2 ", 12, 7, 0, "Jason Otunga", "Xander Velvet"],
    [3, "Hero Coles", "4 - 3", 9, 2, 1, "Hero Cho", "Cole Castor"],
    [4, "Viridian Sail", "4 - 3 ", 9, 2, 0, "Mr Viridian", "Troy the Sailor"],
    [5, "K T", "4 - 3 ", 9, 0, 0, "Trajanboy", "Kendrick Bush"],
    [6, "Task: Heat", "3 - 4", 7, -3, 0, "Heat", "Zack Task"],
    [7, "Moon Jets", "1 - 6 ", 4, -8 , 0, "Aiden Jet", "Kyle Moon"],
    [8, "Indestructible Os", "1 - 6", 4, -9, 0, "Indestructible Isaac", "Owen Owl Oxley"],
    ];

const wrestlerData2 = [
    [1, "Bop Mania", "7 - 0", 14, 13, 0, "Benjamin Bops", "Minty Mania"],
    [2, "The Rockers", "4 - 3 ", 8, 1, 0, "Hakeem Kurr", "Rocket Head"],
    [3, "Frosty Hams", "4- 3", 8, -1, 0, "Lars Hamilton", "Frostbite Fred Bones"],
    [4, "Crazy Casuals", "3 - 4", 9, 0, 0, "Pandemonium", "Casual Carlton"],
    [5, "Go Diegos", "3 - 4", 8, 0, 0, "Go Sea Balt", "Diego Torres"],
    [6, "Crystal Kids", "3 - 4 ", 7,-1, 0, "The Kid", "Crystal"],
    [7, "Rox Jay", "3 - 4 ", 7, -3, 0, "Thaddeus Jay", "Will Rox"],
    [8, "Gloryuri", "1 -6", 3, -9, 0, "Andrew Yuri", "Edwardo"],
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