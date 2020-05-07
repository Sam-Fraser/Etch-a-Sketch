const container = document.querySelector(".container");
const COLOR_BLACK = 'rgb(0,0,0)';
const COLOR_WHITE = 'rgb(255,255,255)';
let gridSize = 16;

function createPixelGrid() {
    container.style.cssText = `grid-template-columns: repeat(${gridSize}, 1fr); grid-template-rows: repeat(${gridSize}, 1fr);`;
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let pxl = document.createElement('div');
            pxl.style.cssText = "grid-column: " + j + " / span 1; grid-row: " + i + " / span 1; background-color: rgb(255,255,255);";
            pxl.addEventListener('mouseenter', draw);
            container.appendChild(pxl);
        }
    }
}

function activateButtons() {
    const blackMarker = document.querySelector("#blackMarker");
    const rainbowMarker = document.querySelector("#rainbowMarker");
    const shadingMarker = document.querySelector("#shadingMarker");
    const eraser = document.querySelector("#eraser");
    const clearGrid = document.querySelector("#clearGrid");

    blackMarker.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        rainbowMarker.classList.remove('active');
        shadingMarker.classList.remove('active');
        eraser.classList.remove('active');
    });

    rainbowMarker.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        blackMarker.classList.remove('active');
        shadingMarker.classList.remove('active');
        eraser.classList.remove('active');
    });

    shadingMarker.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        blackMarker.classList.remove('active');
        rainbowMarker.classList.remove('active');
        eraser.classList.remove('active');
    });

    eraser.addEventListener('click', (e) => {
        e.target.classList.toggle('active');
        blackMarker.classList.remove('active');
        shadingMarker.classList.remove('active');
        rainbowMarker.classList.remove('active');
    });

    clearGrid.addEventListener('click', (e) => {
        resetGrid();
        blackMarker.classList.remove('active');
        shadingMarker.classList.remove('active');
        rainbowMarker.classList.remove('active');
        eraser.classList.remove('active');
    });
}

function draw(e) {
    if (blackMarker.getAttribute('class').includes('active')) {
        drawBlack(e);
    } else if (rainbowMarker.getAttribute('class').includes('active')) {
        drawRainbow(e);
    } else if (shadingMarker.getAttribute('class').includes('active')) {
        drawShading(e);
    } else if (eraser.getAttribute('class').includes('active')) {
        drawWhite(e);
    } else {

    }
}

function drawBlack(e) {
    e.target.style.backgroundColor = COLOR_BLACK;
}

function drawWhite(e) {
    e.target.style.backgroundColor = COLOR_WHITE;
}

function drawRainbow(e) {
    e.target.style.backgroundColor = `rgb(${randomColorValue()},${randomColorValue()},${randomColorValue()})`;
}

function randomColorValue() {
    let val = Math.floor(Math.random() * 255);
    return val;
}

function drawShading(e) {
    let currentColor = e.target.style.backgroundColor;
    let rgb = currentColor.slice(4).replace(')',"").split(',');

    let newRed = rgb[0] - 25.5;
    let newGreen = rgb[1] - 25.5;
    let newBlue = rgb[2] -25.5;

    if (newRed == 0 || newGreen == 0 || newBlue == 0) {
        newRed === 0;
        newGreen === 0;
        newBlue === 0;
    } else {
        newRed = newRed;
        newGreen = newGreen;
        newBlue = newBlue;
    }

    e.target.style.backgroundColor = `rgb(${newRed},${newGreen},${newBlue})`;
}

function resetGrid() {
    gridSize = Number(prompt("How large do you want your drawing surface to be?", "Enter a number between 16 and 64"));
    if (Number.isNaN(gridSize) || gridSize > 64 || gridSize < 16) {
        resetGrid();
    } else {
        createPixelGrid();
    }
}


activateButtons();
createPixelGrid();