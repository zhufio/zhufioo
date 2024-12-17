const wrestlerData1 = [
        [1, "Hero Coles", "6 - 1 ", 12, 6, 0, "Hero Cho", "Cole Castor"],
        [2, "KT", "5 - 2 ", 12, 6, 0, "Trajanboy", "Kendrick Bush"],
        [3, "Task: Heat", "5 - 2 ", 11, 7, 0, "Heat", "Zack Task"],
        [4, "Indestructible Os", "3 - 4 ", 9, 0, 0, "Indestructible Isaac", "Owen Owl Oxley"],
        [5, "Frostbite Jays", "3 - 4 ", 8, -2, 0, "Frostbite Fred Bones", "Thaddeus Jay"],
        [6, "Rox Bops", "3 - 4 ", 6, -3, 0, "Benjamin Bops", "Will Rox"],
        [7, "Minty Blanks", "2 - 5 ", 4, -8, 0, "Minty Mania", "Blank Shadow"],
        [8, "Drago Kids", "1 - 6 ", 7, -6, 0, "The Kid", "Mason Drago"]
      ];

const wrestlerData2 = [
        [1, "Moon Jets", "6 - 1 ", 13, 8, 0, "Aiden Jet", "Kyle Moon"],
        [2, "Uber Cowboys", "4 - 3  ", 10, 2, 0, "Spike Cowboy", "Uber Squeezed Papaya"],
        [3, "Xander Landon", "4 - 3 ", 10, 1, 0, "Noah Landon", "Xander Velvet"],
        [4, "Otunga Reyes", "4 - 3 ", 8, -2, 0, "Jason Otunga", "Ralph Reyes"],
        [5, "Casual Rockets", "3 - 4 ", 9, 0, 0, "Casual Carlton", "Rocket Head"],
        [6, "Los Gloriosos", "3 - 4 ", 8, -1, 0, "Diego Torres", "Edwardo"],
        [7, "Cookie Deez", "3 - 4 ", 7, -1, 0, "Cooki's Monster", "Deez"],
        [8, "The BLT Gary", "1 - 6 ", 6, -7, 0, "The BLT Cupcake", "Gary Dallas"]
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
