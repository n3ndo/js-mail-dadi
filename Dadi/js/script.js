// assegnare alle variabili per il computer i il giocatore un generatore di numeri casuali
let dado_giocatore = Math.floor(Math.random() * 6) + 1;
let dado_computer = Math.floor(Math.random() * 6) + 1;

let vincitore;
// stabilire il vincitore tra il giocatore e il computer
if (dado_giocatore > dado_computer) {
    vincitore = 'Giocatore';
} else if (dado_computer > dado_giocatore) {
    vincitore = 'Computer';
} else {
    vincitore = 'Pareggio';
}
// stampare a video i risultati
console.log('Giocatore: ' + dado_giocatore);
console.log('Computer: ' + dado_computer);
console.log('Il vincitore è: ' + vincitore);