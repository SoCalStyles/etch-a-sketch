const body = document.querySelector('body');
const bigContainer = document.querySelector('.bigContainer');
const generateButton = document.querySelector('.generateButton');
const clear = document.querySelector('.clear');

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
            tile.addEventListener('mouseover', () => {
                tile.style.backgroundColor = "black";
            })
        }
    }
}

createTiles();

// Generates new grid based on user input
function generateGrid() {
    let answer = prompt('How many squares would you like on each side?');
    answer = +(answer);
    if (answer > 100) {
        alert('That number is too big.');
    } else if (answer <= 0) {
        alert('That number is too small.');
    } else {
        bigContainer.textContent = "";
        for (let i = 0; i < answer; i++) {
            const tileContainer = document.createElement('div');
            bigContainer.appendChild(tileContainer);
            tileContainer.classList.add('tileContainer');
            for (let i = 0; i < answer; i++) {
                const tile = document.createElement('div');
                tileContainer.appendChild(tile);
                tile.classList.add('singleTile');
                tile.addEventListener('mouseover', () => {
                    tile.style.backgroundColor = "black";
                })
            }    
        }    
    }
}

generateButton.addEventListener('click', () => {
    generateGrid();
});

clear.addEventListener('click', () => {
    window.location.reload();
})




