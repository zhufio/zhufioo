// Wrestler data in an array of arrays
const wrestlerData = [
    ["Benjamin Bops", 17, 9, 26, 0, 0, 1],
    ["Will Rox", 17, 9, 10, 0, 0, 1],
    ["Spike Cowboy", 13, 13, 10, 0, 0, 0],
    ["Uber Squeezed Papaya", 13, 13, 21, 0, 0, 0],
    ["Cole Castor", 19, 7, 9, 1, 1, 1],
    ["Hero Cho", 19, 7, 32, 1, 0, 1],
    ["Indestructible Isaac", 14, 12, 18, 0, 0, 1],
    ["Owen Owl Oxley", 14, 12, 18, 0, 0, 1],
    ["Aiden Jet", 16, 10, 15, 0, 0, 0],
    ["Kyle Moon", 16, 10, 20, 0, 0, 0],
    ["Frostbite Fred Bones", 16, 10, 15, 0, 0, 0],  
    ["Thaddeus Jay", 16, 10, 22, 0,  0, 0], 
    ["Kendrick Bush", 15, 11, 11, 0,  0, 0],
    ["Trajanboy", 15, 11, 28, 0, 0, 0],
    ["Heat", 14, 12, 21, 0, 0, 0],
    ["Zack Task", 14, 12, 12, 0, 0, 0],
    ["Mr Viridian", 3, 1, 0, 0, 0, 0],
    ["Troy the Sailor", 3, 1, 5, 0, 0,0], 
    ["Percy Primetime", 2, 2, 1, 0, 0, 0],
    ["Reed Hall-Boyd", 2, 2, 3, 0, 0, 0], 
    ["Blank Shadow", 10, 16, 9, 0, 0 ,0], 
    ["Ralph Reyes", 10, 16, 11, 0, 0, 0],
    ["Jason Otunga", 13, 13, 16, 0, 0, 0], 
    ["Xander Velvet", 9, 17, 13, 0, 0,0], 
    ["Quickdraw Evan", 2, 2, 4, 0, 0, 0],
    ["Warren Charming", 2, 2, 0, 0, 0, 0], 
    ["Crystal", 1, 3, 2, 0, 0, 0],
    ["Lars Hamilton", 1, 3, 1, 0, 0, 0],
    ["Minty Mania", 14, 12, 19, 0, 0, 0],
    ["The Kid", 14, 12, 14, 0, 0, 0],
    ["Mason Drago", 11, 15, 20, 0, 0, 0],
    ["Noah Landon", 7, 19, 10, 0, 0, 0],
    ["Rocket Head", 9, 13, 16, 0, 0, 0],
    ["Casual Carlton", 9, 13, 9, 0, 0, 0], 
    ["Edwardo", 10, 12, 12, 0, 0, 0],
    ["Diego Torres", 10, 12, 12, 0, 0, 0],
    ["Deez", 9, 13, 11, 0, 0, 0],
    ["Cooki's Monster", 9, 13, 14, 0, 0, 0],
    ["Gary Dallas", 4, 18, 1, 0, 0, 0],
    ["The BLT Cupcake", 4, 18, 16, 0, 0, 0],
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

// Sort table function
document.querySelectorAll(".sortable th button").forEach((button, index) => {
    button.addEventListener("click", () => {
        const rowsArray = Array.from(tableBody.querySelectorAll("tr"));
        const sortedRows = rowsArray.sort((a, b) => {
            const cellA = a.children[index].textContent;
            const cellB = b.children[index].textContent;
            return isNaN(cellA) || isNaN(cellB)
                ? cellA.localeCompare(cellB)
                : parseFloat(cellA) - parseFloat(cellB);
        });

        // Toggle sort direction
        if (button.classList.contains("ascending")) {
            sortedRows.reverse();
            button.classList.remove("ascending");
            button.classList.add("descending");
        } else {
            button.classList.add("ascending");
            button.classList.remove("descending");
        }

        // Re-attach sorted rows
        tableBody.innerHTML = "";
        sortedRows.forEach(row => tableBody.appendChild(row));
    });
});
