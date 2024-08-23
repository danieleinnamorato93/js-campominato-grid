//Preparazione: richiamo elementi del DOM
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');

// impostazioni griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols ;

// Creo una funzione per generare una griglia
function createGrid() {

//genero le celle con un ciclo

for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;

// inserisco la cella nella griglia
    grid.appendChild(cell);
        }
    }

    //aggiungo l'evento al bottone
    btn.addEventListener('click', createGrid);
