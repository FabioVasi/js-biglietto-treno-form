/*

Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.

*/

/*
Strumenti.

- console log
- getElementById/querrySelector
- const/let
- if/else
- .classList/.className
*/
// chiedere numero di chilometri da percorrere
// chiedere Nome e Cognome dell'utente

// chiedere l'età del passeggero
// prezzo del biglietto intero 0.21 € al km

// applicare il 20% di sconto per i minorenni
// applicare il 40% di sconto per gli over 65

document.getElementById('generate').addEventListener("click", function() {
    const userName = document.getElementById('user').value;
    console.log(userName);
    const Km = document.getElementById('distance').value;
    console.log(Km);
    const userAge = document.getElementById('age').value;
    console.log(userAge);
});

let price = 0.21;

let ticketPrice = Km * price;

if(userAge === 'Minorenne') {
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
} else if(userAge === 'Over 65'){
    ticketPrice = ticketPrice - (ticketPrice * 0.4);
}

console.log(ticketPrice);