// Fetch and display data for the first table
fetch('data2.txt')
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
fetch('data3.txt')
    .then(response => response.text())
    .then(data => {
        const rows = data.trim().split('\n');
        const table = document.getElementById('top-scorers-table');

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
