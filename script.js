// Wrestler data in an array of arrays
const wrestlerData = [
    ["Casual Carlton", 9, 13, 9, 0, 0, 0, 2],
    ["Rocket Head", 9, 13, 16, 0, 0, 0, 2],
    ["Benjamin Bops", 17, 12, 26, 0, 0, 1, 2],
    ["Will Rox", 17, 12, 11, 0, 0, 1, 2],
    ["Jason Otunga", 15, 14, 18, 0, 0, 0, 2],
    ["Ralph Reyes", 11, 18, 12, 0, 0, 0, 2],
    ["Edwardo", 10, 12, 12, 0, 0, 0, 2],
    ["Diego Torres", 10, 12, 12, 0, 0, 0, 2],
    ["Deez", 9, 13, 11, 0, 0, 0, 1],
    ["Cooki's Monster", 9, 13, 14, 0, 0, 0, 1],
    ["Gary Dallas", 4, 18, 1, 0, 0, 0, 1],
    ["The BLT Cupcake", 4, 18, 16, 0, 0, 0, 1],
    ["The Kid", 14, 5, 15, 0, 0, 0, 3],
    ["Mason Drago", 12, 17, 22, 0, 0, 0, 2],
    ["Blank Shadow", 11, 18, 11, 0, 0, 0, 2],
    ["Minty Mania", 14, 5, 19, 0, 0, 0, 3],
    ["Indestructible Isaac", 16, 13, 19, 0, 0, 1, 1],
    ["Owen Owl Oxley", 16, 13, 21, 0, 0, 1, 1],
    ["Frostbite Fred Bones", 16, 13, 16, 0, 0, 0, 2],
    ["Thaddeus Jay", 16, 13, 22, 0, 0, 0, 2],
    ["Spike Cowboy", 15, 14, 11, 0, 0, 1, 1],
    ["Uber Squeezed Papaya", 15, 14, 24, 0, 0, 1, 1],
    ["Hero Cho", 22, 7, 38, 2, 1, 1, 1],
    ["Cole Castor", 22, 7, 9, 2, 1, 1, 1],
    ["Heat", 16, 13, 25, 0, 0, 0, 1],
    ["Zack Task", 16, 13, 13, 0, 0, 0, 1],
    ["Xander Velvet", 11, 18, 15, 0, 0, 0, 2],
    ["Noah Landon", 8, 21, 11, 0, 0, 0, 2],
    ["Aiden Jet", 17, 12, 16, 0, 0, 0, 1],
    ["Kyle Moon", 17, 12, 23, 0, 0, 0, 1],
    ["Kendrick Bush", 17, 12, 12, 0, 0, 0, 1],
    ["Trajanboy", 17, 12, 32, 0, 0, 0, 1],
    ["Lars Hamilton", 4, 3, 3, 0, 0, 0, 2],
    ["Mr Viridian", 6, 1, 1, 0, 0, 0, 1],
    ["Quickdraw Evan", 2, 5, 4, 0, 0, 0, 1],
    ["Percy Primetime", 4, 3, 5, 0, 0, 0, 1],
    ["Crystal", 4, 3, 6, 0, 0, 0, 2],
    ["Troy the Sailor", 6, 1, 11, 0, 0, 0, 1],
    ["Warren Charming", 2, 5, 1, 0, 0, 0, 1],
    ["Reed Hall-Boyd", 4, 3, 3, 0, 0, 0, 1],
    ["Hakeem Kurr", 0, 0, 0, 0, 0, 0, 1],
    ["Pandemonium", 0, 0, 0, 0, 0, 0, 1],
    ["Andrew Yuri", 0, 0, 0, 0, 0, 0, 1],
    ["Go Sea Balt", 0, 0, 0, 0, 0, 0, 1],
    ["Tono Wolf", 0, 0, 0, 0, 0, 0, 0],
    ["Alto Vuelo Mexicano", 0, 0, 0, 0, 0, 0, 0],
    ["Igor Husk", 0, 0, 0, 0, 0, 0, 0],
    ["Franny Fox", 0, 0, 0, 0, 0, 0, 0],
    ["Narcissa Papillion", 0, 0, 0, 0, 0, 0, 0],
    ["Rexton Stryker", 0, 0, 0, 0, 0, 0, 0],
    ["Yale Yabai", 0, 0, 0, 0, 0, 0, 0]
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
