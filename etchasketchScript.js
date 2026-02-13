
// Select container div to assign other divs to later
const container = document.querySelector('#container');

// Create 16x16 (256 total) divs and assign as child of container
// Use a nested for loop to create a div for a row with 16 child divs
// and repeat this 16 times

function addSquareDivToRow(row) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');
    row.appendChild(squareDiv);
}

for (let i = 0; i < 16; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (j = 0; j < 16; j++) {
        addSquareDivToRow(rowDiv);
    };
    container.appendChild(rowDiv);
}

