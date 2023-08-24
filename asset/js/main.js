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
const Km = document.querySelector()
// chiedere Nome e Cognome dell'utente
const userName = document.querySelector()
// chiedere l'età del passeggero
const userAge = document.querySelector()
// prezzo del biglietto intero 0.21 € al km
let ticketPrice = Km * 0.21;
// applicare il 20% di sconto per i minorenni
// applicare il 40% di sconto per gli over 65
if(userAge < 18){
    ticketPrice = ticketPrice - (ticketPrice * 0.2);
} else if(userAge > 65){
    ticketPrice = ticketPrice - (ticketPrice * 0.4);
}