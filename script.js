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
            pxl.addEventListener('mouseenter', drawShading);
            container.appendChild(pxl);
        }
    }
}

function draw() {

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



createPixelGrid();