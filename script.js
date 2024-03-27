const container = document.querySelector('.container');
const btn = document.querySelector('button');

let grid = 16;
function createGrid(gridNumber) {
    for (let i = 0; i < (gridNumber * gridNumber); i++) {
        let div = document.createElement('div');
        div.classList.add('squares');
        
        div.addEventListener('mouseenter', () => {
            div.style.backgroundColor = randomColor();
        });

        div.style.flexBasis = `calc(95% / ${gridNumber})`;
        
        container.appendChild(div);
    };
};
createGrid(grid);


// Change grid
function changeGrid() {
    do {
        grid = parseInt(prompt('Grid size: '));
    }
    while (grid > 100);
    
    const squares = document.querySelectorAll('.squares');
    squares.forEach(sqr => {
        container.removeChild(sqr);
    });

    createGrid(grid);
};

btn.addEventListener('click', changeGrid);

function randomColor() {
    const randomColor = Math.floor(Math.random()*16777215).toString(16);
    return '#' + randomColor;
};