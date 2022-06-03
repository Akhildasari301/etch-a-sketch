let container = document.getElementById('container');
let gridSize;
gridSize = 16;
let container_height = container_width = 400;
container.style.width = container.style.height = `${container_width}px`;
let clearbtn = document.querySelector('.clearbtn');


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
        i.addEventListener('mouseover', () => changeColor(i, getRandomColor()));
    }
    
}

function getRandomColor() {
    let cR = Math.floor(Math.random() * 256);
    let cG = Math.floor(Math.random() * 256);
    let cB = Math.floor(Math.random() * 256);
    return `rgb(${cR}, ${cG}, ${cB})`;
}

function changeColor(i, color) {
    i.style.backgroundColor = color;
}

function clearGrid() {
    container.innerHTML = "";
    createGrid(gridSize);
}

clearbtn.addEventListener('click', clearGrid)

let gridSizeChange = document.querySelector('.change-grid-size');
gridSizeChange.addEventListener('click', () => {
    gridSize = prompt("Enter the new size");
    clearGrid()
})


window.onload = () => {
    createGrid(gridSize);
}
