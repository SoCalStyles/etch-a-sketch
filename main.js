const body = document.querySelector('body');
const tileContainer = document.querySelector('.tileContainer');

// create 16x16 grid of square divs
function createTiles() {
    for (let i = 0; i < 256; i++) {
        const tile = document.createElement('div');
        tileContainer.appendChild(tile);
        tile.classList.add('singleTile');
    }
}

createTiles();



