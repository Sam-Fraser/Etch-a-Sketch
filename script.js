const container = document.querySelector(".container");
const COLOR_BLACK = 'rgb(0,0,0)';
const COLOR_WHITE = 'rgb(255,255,255)';
let gridSize = 16;

container.style.cssText = "grid-template-columns: repeat(16, 1fr); grid-template-rows: repeat(16, 1fr);";

function createPixelGrid() {
    for (let i = 1; i <= gridSize; i++) {
        for (let j = 1; j <= gridSize; j++) {
            let pxl = document.createElement('div');
            pxl.style.cssText = "grid-column: " + j + " / span 1; grid-row: " + i + " / span 1; background-color: rgb(255,255,255);";
            pxl.addEventListener('mouseenter', drawRainbow);
            container.appendChild(pxl);
        }
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

createPixelGrid();