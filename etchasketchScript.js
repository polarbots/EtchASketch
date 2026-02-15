// Select container div to assign other divs to later
const container = document.querySelector('#container');

// Set default value to numSquarePerSide
let numSquarePerSide = 16

// Add a div of class square as child of a div with class row
function addSquareDivToRow(row) {
    const squareDiv = document.createElement('div');
    squareDiv.classList.add('square');

    // Add event listener to change background color on mouseenter
    squareDiv.addEventListener("mouseenter", (event) => {
        // Code for random colors
        const r = Math.round(Math.random() * 255);
        const g = Math.round(Math.random() * 255);
        const b = Math.round(Math.random() * 255);

        event.target.style.backgroundColor = `rgb(${r}, ${g}, ${b})`;

        // event.target.style.backgroundColor = 'coral';
    });

    // Revert to original on mouseleave with a small delay for a trailing effect
    squareDiv.addEventListener("mouseleave", (event) => {
        let timerId = setTimeout(function() {
            event.target.style.backgroundColor = '';
        }, 200);
    });

    row.appendChild(squareDiv);
};

// Create a grid of size _x_ as determined by user input
function createGrid(numSquarePerSide) {
    for (let i = 0; i < numSquarePerSide; i++) {
    const rowDiv = document.createElement('div');
    rowDiv.classList.add('row');
    for (j = 0; j < numSquarePerSide; j++) {
        addSquareDivToRow(rowDiv);
    };
    container.appendChild(rowDiv);
    };
};

// Create default 16x16 grid
createGrid(numSquarePerSide);

// Set event listener on button click to prompt user to enter number for numSquarePerSide
const numSquareButton = document.querySelector('button');
numSquareButton.addEventListener("click", () => {
    // Cast to number, then round to get an integer
    let userInput = Math.round(Number(prompt(`How many squares do you want per side?\nThis value can be any integer from 1 to 99 and defaults to ${numSquarePerSide}.`)));

    // Verify input is an int from 1-99. If so, assign to numSquarePerSide
    if (userInput >= 1 && userInput <= 99) {
        numSquarePerSide = userInput;
    } else {
        numSquarePerSide = 16;
    };

    // Need to first clear the existing grid
    container.replaceChildren();

    createGrid(numSquarePerSide);
});

