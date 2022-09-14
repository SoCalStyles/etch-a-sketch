const body = document.querySelector('body');
const bigContainer = document.querySelector('.bigContainer');
bigContainer.style.cursor = "crosshair";
const generateButton = document.querySelector('.generateButton');
const eraser = document.querySelector('.eraser');
const classic = document.querySelector('.classic');
const rainbow = document.querySelector('.rainbow');
const clearBoard = document.querySelector('.clearBoard');

let mode = "classic";
classic.addEventListener('click', () => {
    mode = "classic";
    rainbow.classList.remove('active');
    eraser.classList.remove('active');
    classic.classList.add('active');
})
rainbow.addEventListener('click', () => {
    mode = "rainbow";
    classic.classList.remove('active');
    eraser.classList.remove('active');
    rainbow.classList.add('active');
})
eraser.addEventListener('click', () => {
    mode = "eraser";
    rainbow.classList.remove('active');
    classic.classList.remove('active');
    eraser.classList.add('active');
})

// Generate random rgb value
function randomColor() {
   let a = Math.floor(Math.random() * 256);
   let b = Math.floor(Math.random() * 256);
   let c = Math.floor(Math.random() * 256);
   let RGB = `rgb(${a},${b},${c})`;
   return RGB;
}

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
                if (mode === "rainbow") {
                    tile.style.backgroundColor = randomColor();
                } else if (mode === "eraser") {
                    tile.style.backgroundColor = "white";
                } else {
                    tile.style.backgroundColor = "black";
                }
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
                    if (mode === "rainbow") {                       
                        tile.style.backgroundColor = randomColor();
                    } else if (mode === "eraser") {
                        tile.style.backgroundColor = "white";
                    } else {
                        tile.style.backgroundColor = "black";
                    }
                })
            }    
        }    
    }
    clearBoard.addEventListener('click', () => {
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
                        if (mode === "rainbow") {
                            tile.style.backgroundColor = randomColor();
                        } else if (mode === "eraser") {
                            tile.style.backgroundColor = "white";
                        } else {
                            tile.style.backgroundColor = "black";
                        }
                    })
                }    
            }    
    })
}

generateButton.addEventListener('click', () => {
    generateGrid();
});

clearBoard.addEventListener('click', () => {
    bigContainer.textContent = "";
    createTiles();
});


