let container = document.getElementById('container');
let gridSize = 16;
let container_height = container_width = 400;
let clearbtn = document.querySelector('.clearbtn');
let default_color = "gold";
let cellColor = default_color;
let color_mode = 'Fixed';
let randColorBtn = document.querySelector('.random-color');
let currentMode = document.querySelector('.current-mode');
let colorChangeBtn = document.getElementById('randColor');
let eraserBtn = document.querySelector('.eraser');
let eraser_color = "#fefefe";
let gridSizeChange = document.querySelector('.change-grid-size');

container.style.width = container.style.height = `${container_width}px`;


function createGrid(size) {
    for (let i = 0; i < size; i++){
        let row = document.createElement('div');
        row.className = 'row';
        container.appendChild(row);
    }
    let rows = document.querySelectorAll('.row');
    for (let i = 0; i < size; i++) {
        for (let j = 0; j < size; j++){
            let newCell = document.createElement('div');
            newCell.className = 'cell';
            rows[i].appendChild(newCell);
        }
    }
    let cells = document.querySelectorAll('.cell');
    cells.forEach((item) => {
        item.style.width = `${container_width/gridSize}px`;
        item.style.height = `${container_height/gridSize}px`;
    })
    for (let i of cells){
        i.addEventListener('mouseover', () => changeColor(i));
    }
    currentMode.textContent = `Current mode: ${color_mode} color`;
}

function getRandomColor() {
    let cR = Math.floor(Math.random() * 256);
    let cG = Math.floor(Math.random() * 256);
    let cB = Math.floor(Math.random() * 256);
    return `rgb(${cR}, ${cG}, ${cB})`;
}

function changeColor(i) {
    if (color_mode == 'Fixed'){
        i.style.backgroundColor = cellColor;
    } else if (color_mode == 'Eraser') {
        i.style.backgroundColor = eraser_color;
    } else {
        i.style.backgroundColor = getRandomColor();
    }
}

function clearGrid() {
    container.innerHTML = "";
    createGrid(gridSize);
}


gridSizeChange.addEventListener('click', () => {
    gridSize = prompt("Enter the new size");
    gridSize = gridSize || 16;
    if (gridSize >= 100){
        alert("Please enter a value less than 100.");
        gridSize = prompt("Enter the new size");
    }
    clearGrid()
})

colorChangeBtn.oninput = () => {
    color_mode = "Fixed";
    cellColor = colorChangeBtn.value;
    currentMode.textContent = `Current mode: ${color_mode} color`;
}

randColorBtn.addEventListener('click', () => {
    color_mode = "Random";
    currentMode.textContent = `Current mode: ${color_mode} color`;
})

eraserBtn.addEventListener('click', () => {
    color_mode = "Eraser";
    currentMode.textContent = `Current mode: ${color_mode}`;
})

clearbtn.addEventListener('click', clearGrid)

window.onload = () => {
    createGrid(gridSize);
}
