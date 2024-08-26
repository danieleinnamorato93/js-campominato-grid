//Preparazione: richiamo elementi del DOM
const btn = document.getElementById('btn');
const grid = document.getElementById('grid');

// impostazioni griglia
const rows = 10;
const cols = 10;
const totalCells = rows * cols ;

// Creo una funzione per generare una griglia
function createGrid() {

    grid.innerHTML = '';

//genero le celle con un ciclo

for (let i = 1; i <= totalCells; i++) {
    const cell = document.createElement('div');
    cell.classList.add('cell');
    cell.textContent = i;

    //aggiungo l'evento alla cella
    cell.addEventListener('click', () => {
        console.log(`Hai sceltp la numero: ${i}`);
        cell.classList.add('clicked');
    });

// inserisco la cella nella griglia
    grid.appendChild(cell);
        }
    }

    //aggiungo l'evento al bottone
    btn.addEventListener('click', createGrid);
