let listaEmailConsentite = ['cicciopasitccio@gmail.com', 'mariopastrocchi@gmail.com', 'pippopirlotti@gmail.com'];
let emailInserita = prompt('Inserisci la tua email:');
let accessoConsentito = false;

for (let i = 0; i < listaEmailConsentite.length; i++) {
    if (emailInserita == listaEmailConsentite[i]) {
        accessoConsentito = true;
        break;
    }
}

if (accessoConsentito) {
    console.log('Accesso consentito. Benvenuto!');
}
else {
    console.log('Accesso negato. La tua email non è autorizzata.');
}