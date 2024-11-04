// Fetch and display data for the first table
fetch('data-folder/data5.txt')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n');
        const table = document.getElementById('data-table');

        rows.forEach((row, index) => {
            const cols = row.split(',');
            const tr = document.createElement('tr');

            cols.forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Error loading data for data-table:', error));

// Fetch and display data for the second table
fetch('data-folder/data6.txt')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n');
        const table = document.getElementById('top-scorers-table2');

        rows.forEach((row, index) => {
            const cols = row.split(',');
            const tr = document.createElement('tr');

            cols.forEach(col => {
                const cell = document.createElement(index === 0 ? 'th' : 'td');
                cell.textContent = col.trim();
                tr.appendChild(cell);
            });

            table.appendChild(tr);
        });
    })
    .catch(error => console.error('Error loading data for top-scorers-table:', error));
