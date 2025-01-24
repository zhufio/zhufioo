// Wrestler data in an array of arrays
const wrestlerData = [
["Casual Carlton",	12 ,	17 ,	11 ,	0 ,	0 ,	0 ,	3 ,],
["Rocket Head",	13 ,	16 ,	20 ,	0 ,	0 ,	0 ,	2 ,],
["Benjamin Bops",	24 ,	12 ,	32 ,	0 ,	0 ,	1 ,	2 ,],
["Will Rox",	20 ,	16 ,	14 ,	0 ,	0 ,	1 ,	2 ,],
["Jason Otunga",	20 ,	16 ,	22 ,	0 ,	0 ,	0 ,	2 ,],
["Ralph Reyes",	11 ,	18 ,	12 ,	0 ,	0 ,	0 ,	2 ,],
["Edwardo",	11 ,	18 ,	13 ,	0 ,	0 ,	0 ,	2 ,],
["Diego Torres",	13 ,	16 ,	15 ,	0 ,	0 ,	0 ,	2 ,],
["Deez",	9 ,	13 ,	11 ,	0 ,	0 ,	0 ,	2 ,],
["Cooki's Monster",	9 ,	13 ,	14 ,	0 ,	0 ,	0 ,	2 ,],
["Gary Dallas",	4 ,	18 ,	1 ,	0 ,	0 ,	0 ,	2 ,],
["The BLT Cupcake",	4 ,	18 ,	16 ,	0 ,	0 ,	0 ,	2 ,],
["The Kid",	17 ,	19 ,	19 ,	0 ,	0 ,	0 ,	3 ,],
["Mason Drago",	12 ,	17 ,	22 ,	0 ,	0 ,	0 ,	2 ,],
["Blank Shadow",	11 ,	18 ,	11 ,	0 ,	0 ,	0 ,	2 ,],
["Minty Mania",	21 ,	15 ,	27 ,	0 ,	1 ,	0 ,	3 ,],
["Indestrucible Isaac",	17 ,	19 ,	20 ,	0 ,	0 ,	1 ,	2 ,],
["Owen Owl Oxley",	17 ,	19 ,	24 ,	0 ,	0 ,	1 ,	2 ,],
["Frostbite Fred Bones",	20 ,	16 ,	21 ,	0 ,	0 ,	0 ,	3 ,],
["Thaddeus Jay",	19 ,	17 ,	26 ,	0 ,	0 ,	0 ,	2 ,],
["Spike Cowboy",	21 ,	15 ,	21 ,	1 ,	0 ,	1 ,	1 ,],
["Uber Squeezed Papaya",	21 ,	15 ,	27 ,	1 ,	0 ,	1 ,	1 ,],
["Hero Cho",	26 ,	10 ,	46 ,	2 ,	1 ,	2 ,	1 ,],
["Cole Castor",	26 ,	10 ,	10 ,	2 ,	1 ,	2 ,	1 ,],
["Heat",	19 ,	17 ,	30 ,	0 ,	0 ,	0 ,	1 ,],
["Zack Task",	19 ,	17 ,	15 ,	0 ,	0 ,	0 ,	1 ,],
["Xander Velvet",	16 ,	20 ,	23 ,	0 ,	0 ,	0 ,	2 ,],
["Noah Landon",	8 ,	21 ,	11 ,	0 ,	0 ,	0 ,	2 ,],
["Aiden Jet",	18 ,	18 ,	17 ,	0 ,	0 ,	0 ,	2 ,],
["Kyle Moon",	18 ,	18 ,	26 ,	0 ,	0 ,	0 ,	2 ,],
["Kendrick Bush",	21 ,	15 ,	13 ,	0 ,	0 ,	1 ,	1 ,],
["Trajanboy",	21 ,	15 ,	40 ,	0 ,	0 ,	1 ,	1 ,],
["Lars Hamilton",	8 ,	6 ,	6 ,	0 ,	0 ,	0 ,	3 ,],
["Mr Viridian",	10 ,	4 ,	6 ,	0 ,	0 ,	1 ,	1 ,],
["Quickdraw Evan",	2 ,	5 ,	4 ,	0 ,	0 ,	0 ,	1 ,],
["Percy Primetime",	4 ,	3 ,	5 ,	0 ,	0 ,	0 ,	1 ,],
["Crystal",	7 ,	7 ,	9 ,	0 ,	0 ,	0 ,	2 ,],
["Troy the Sailor",	10 ,	4 ,	15 ,	0 ,	0 ,	1 ,	1 ,],
["Warren Charming",	2 ,	5 ,	1 ,	0 ,	0 ,	0 ,	1 ,],
["Reed Hall-Boyd",	4 ,	3 ,	3 ,	0 ,	0 ,	0 ,	2 ,],
["Hakeem Kurr",	4 ,	3 ,	4 ,	0 ,	0 ,	0 ,	1 ,],
["Pandemonium",	3 ,	4 ,	7 ,	0 ,	0 ,	0 ,	2 ,],
["Andrew Yuri",	1 ,	6 ,	2 ,	0 ,	0 ,	0 ,	1 ,],
["Go Sea Balt",	3 ,	4 ,	5 ,	0 ,	0 ,	0 ,	1 ,],
["Tono Wolf",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	1 ,],
["Alto Vuelo Mexicano",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	1 ,],
["Igor Husk",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	1 ,],
["Franny Fox",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
["Narcissa Papillion",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
["Rexton Stryker",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
["Yale Yabai",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
["Little Guy",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
["Catarina Scratch",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,],
]
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
