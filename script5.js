const wrestlerData1 = [
    [1, "Hero Coles", "6 - 1 - 0", 13, 7, 0, "Hero Cho", "Cole Castor", "WLWWWWW"],
    [2, "Indestructible Os", "5 - 2 - 0", 11, 3, 0, "Indestructible Isaac", "Owen Owl Oxley", "LLLWWWL"],
    [3, "Uber Cowboys", "4 - 3 - 0", 9, 1, 0, "Spike Cowboy", "Uber Squeezed Papaya", "LWLLWWW"],
    [4, "K T", "3 - 4 - 0", 10, 1, 0, "Trajanboy", "Kendrick Bush", "WWWWWLL"],
    [5, "Moon Jets", "3 - 4 - 0", 8, -2, 1, "Aiden Jet", "Kyle Moon", "LWWWWWW"],
    [6, "Task: Heat", "3 - 4 - 0", 8, -2, 0, "Heat", "Zack Task", "WWLWLWW"],
    [7, "Viridian Sail", "3 - 4 - 0", 7, -1, 0, "Mr Viridian", "Troy the Sailor", "WWLLWLL"],
    [8, "Otunga Velvet", "1 - 6 - 0", 5, -7, 0, "Jason Otunga", "Xander Velvet", "LLWLLWW"]
    ];

const wrestlerData2 = [
    [1, "Bop Mania", "6 - 1 - 0", 12, 7, 0, "Benjamin Bops", "Minty Mania", "WWLWLWW"],
    [2, "Rox Jay", "5 - 2 - 0", 10, 4, 0, "Thaddeus Jay", "Will Rox", "WWWWWLL"],
    [3, "Frosty Hams", "4 - 3 - 0", 9, 3, 1, "Lars Hamilton", "Frostbite Fred Bones", "WWLLWLL"],
    [4, "Crystal Kids", "4 - 3 - 0", 9, 3, 0, "The Kid", "Crystal", "WLWWWWW"],
    [5, "The Rockers", "4 - 3 - 0", 8, 2, 0, "Hakeem Kurr", "Rocket Head", "LLLWWWL"],
    [6, "Crazy Casuals", "2 - 5 - 0", 6, -5, 0, "Pandemonium", "Casual Carlton", "LWWWWWW"],
    [7, "Gloryuri", "2 - 5 - 0", 5, -6, 0, "Andrew Yuri", "Edwardo", "LLWLLWW"],
    [8, "Go Diegos", "1 - 6 - 0", 4, -8, 0, "Go Sea Balt", "Diego Torres", "LWLLWWW"]
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