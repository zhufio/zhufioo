// Wrestler data in an array of arrays
const wrestlerData = [
["Casual Carlton",	9 ,	15 ,	9 ,	0 ,	0 ,	0 ,	2 ],
["Rocket Head",	12 ,	14 ,	19 ,	0 ,	0 ,	0 ,	2 ],
["Benjamin Bops",	21 ,	12 ,	30 ,	0 ,	0 ,	1 ,	2 ],
["Will Rox",	19 ,	14 ,	12 ,	0 ,	0 ,	1 ,	2 ],
["Jason Otunga",	19 ,	14 ,	20 ,	0 ,	0 ,	0 ,	2 ],
["Ralph Reyes",	11 ,	18 ,	12 ,	0 ,	0 ,	0 ,	2 ],
["Edwardo",	11 ,	15 ,	13 ,	0 ,	0 ,	0 ,	2 ],
["Diego Torres",	10 ,	16 ,	12 ,	0 ,	0 ,	0 ,	2 ],
["Deez",	9 ,	13 ,	11 ,	0 ,	0 ,	0 ,	1 ],
["Cooki's Monster",	9 ,	13 ,	14 ,	0 ,	0 ,	0 ,	1 ],
["Gary Dallas",	4 ,	18 ,	1 ,	0 ,	0 ,	0 ,	1] ,
["The BLT Cupcake",	4 ,	18 ,	16 ,	0 ,	0 ,	0 ,	1 ],
["The Kid",	16 ,	17 ,	18 ,	0 ,	0 ,	0 ,	3 ],
["Mason Drago",	12 ,	17 ,	22 ,	0 ,	0 ,	0 ,	2 ],
["Blank Shadow",	11 ,	18 ,	11 ,	0 ,	0 ,	0 ,	2 ],
["Minty Mania",	18 ,	15 ,	23 ,	0 ,	0 ,	0 ,	3 ],
["Indestrucible Isaac",	17 ,	16 ,	20 ,	0 ,	0 ,	1 ,	1 ],
["Owen Owl Oxley",	17 ,	16 ,	23 ,	0 ,	0 ,	1 ,	1 ],
["Frostbite Fred Bones",	18 ,	15 ,	20 ,	0 ,	0 ,	0 ,	2 ],
["Thaddeus Jay",	18 ,	15 ,	25 ,	0 ,	0 ,	0 ,	2 ],
["Spike Cowboy",	18 ,	15 ,	17 ,	0 ,	0 ,	1 ,	1 ],
["Uber Squeezed Papaya",	18 ,	15 ,	25 ,	0 ,	0 ,	1 ,	1 ],
["Hero Cho",	23 ,	10 ,	41 ,	2 ,	1 ,	1 ,	1 ],
["Cole Castor",	23 ,	10 ,	9 ,	2 ,	1 ,	1 ,	1 ],
["Heat",	18 ,	15 ,	28 ,	0 ,	0 ,	0 ,	1 ],
["Zack Task",	18 ,	15 ,	14 ,	0 ,	0 ,	0 ,	1 ],
["Xander Velvet",	15 ,	18 ,	21 ,	0 ,	0 ,	0 ,	2] ,
["Noah Landon",	8 ,	21 ,	11 ,	0 ,	0 ,	0 ,	2 ],
["Aiden Jet",	17 ,	16 ,	17 ,	0 ,	0 ,	0 ,	1 ],
["Kyle Moon",	17 ,	16 ,	24 ,	0 ,	0 ,	0 ,	1 ],
["Kendrick Bush",	19 ,	14 ,	12 ,	0 ,	0 ,	1 ,	1 ],
["Trajanboy",	19 ,	14 ,	37 ,	0 ,	0 ,	1 ,	1 ],
["Lars Hamilton",	6 ,	5 ,	3 ,	0 ,	0 ,	0 ,	2] ,
["Mr Viridian",	9 ,	2 ,	5 ,	0 ,	0 ,	1 ,	1 ],
["Quickdraw Evan",	2 ,	5 ,	4 ,	0 ,	0 ,	0 ,	1 ],
["Percy Primetime",	4 ,	3 ,	5 ,	0 ,	0 ,	0 ,	1 ],
["Crystal",	6 ,	5 ,	7 ,	0 ,	0 ,	0 ,	2 ],
["Troy the Sailor",	9 ,	2 ,	14 ,	0 ,	0 ,	1 ,	1 ],
["Warren Charming",	2 ,	5 ,	1 ,	0 ,	0 ,	0 ,	1 ],
["Reed Hall-Boyd",	4 ,	3 ,	3 ,	0 ,	0 ,	0 ,	1 ],
["Hakeem Kurr",	3 ,	1 ,	3 ,	0 ,	0 ,	0 ,	1 ],
["Pandemonium",	2 ,	2 ,	4 ,	0 ,	0 ,	0 ,	1 ],
["Andrew Yuri",	1 ,	3 ,	2 ,	0 ,	0 ,	0 ,	1 ],
["Go Sea Balt",	0 ,	4 ,	2 ,	0 ,	0 ,	0 ,	1 ],
["Tono Wolf",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Alto Vuelo Mexicano",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Igor Husk",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Franny Fox",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Narcissa Papillion",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Rexton Stryker",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Yale Yabai",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
["Little Guy",	0 ,	0 ,	0 ,	0 ,	0 ,	0 ,	0 ],
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
