
// Select container div to assign other divs to later
const container = document.querySelector('#container');

// Add a div of class square as child of a div with class row
function addSquareDivToRow(row) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    row.appendChild(squareDiv);
}

// Create 16 row divs each containing 16 square divs for a 16x16 grid and assign as child of container
for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (j = 0; j < 16; j++) {
        addSquareDivToRow(rowDiv);
    };
    container.appendChild(rowDiv);
}

