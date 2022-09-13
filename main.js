const body = document.querySelector('body');
const bigContainer = document.querySelector('.bigContainer');
const generateButton = document.querySelector('.generateButton');

// create 16x16 grid of square divs
function createTiles() {
    for (let i = 0; i < 16; i++) {
        const tileContainer = document.createElement('div');
        bigContainer.appendChild(tileContainer);
        tileContainer.classList.add('tileContainer');
        for (let i = 0; i < 16; i++) {
            const tile = document.createElement('div');
            tileContainer.appendChild(tile);
            tile.classList.add('singleTile');
        }
    }
}

createTiles();

function generateGrid() {
    let answer = prompt('How many squares would you like on each side?');
    answer = +(answer);
    if (answer > 100) {
        alert('That number is too big.');
    } else if (answer <= 0) {
        alert('That number is too small.');
    } else {
        for (let i = 0; i < answer; i++) {
            const tileContainer = document.createElement('div');
            bigContainer.appendChild(tileContainer);
            tileContainer.classList.add('tileContainer');
            for (let i = 0; i < answer; i++) {
                const tile = document.createElement('div');
                tileContainer.appendChild(tile);
                tile.classList.add('singleTile');
            }
        }
    }
}

generateButton.addEventListener('click', () => {
    // remove original 16x16 grid
    bigContainer.textContent = "";
    generateGrid();
});




