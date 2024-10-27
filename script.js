function addRow() {
    // Get table and form values
    const Wrestlers = document.getElementById("Wrestlers").value;
    const Wins= document.getElementById("Wins").value;
    const Losses = document.getElementById("Losses").value;
    const Falls = document.getElementById("Falls gained").value;
    const ZCW = document.getElementById("ZCW Champs").value;
    const Cheap = document.getElementById("Cheap Champs").value;
    const True = document.getElementById("True Wrestling Champs").value;
    // Insert a new row at the end of the table
    const newRow = table.insertRow();

    // Insert cells and add values
    newRow.insertCell(0).textContent = Wrestlers;
    newRow.insertCell(1).textContent = Wins
    newRow.insertCell(2).textContent = Losses;
    newRow.insertCell(3).textContent = Falls;
    newRow.insertCell(4).textContent = ZCW;
    newRow.insertCell(5).textContent = Cheap;
    newRow.insertCell(6).textContent = True;
}