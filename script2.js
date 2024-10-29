// Fetch and display data from the txt file
fetch('data2.txt')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n'); // Split lines
        const table = document.getElementById('data-table');

        rows.forEach((row, index) => {
            const cols = row.split(','); // Split columns by commas
            const tr = document.createElement('tr');

            // For the first row, create header cells; otherwise, create data cells
            cols.forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Error loading data:', error));
