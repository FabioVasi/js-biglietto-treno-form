/*

Scrivere un programma che chieda all’utente:

Il numero di chilometri da percorrere
Età del passeggero Sulla base di queste informazioni dovrà calcolare il prezzo totale del biglietto di viaggio, secondo le seguenti regole:
il prezzo del biglietto è definito in base ai km (0.21 € al km)
va applicato uno sconto del 20% per i minorenni.
va applicato uno sconto del 40% per gli over 65.

*/

// chiedere numero di chilometri da percorrere

const Km = Number(prompt('Quanti Km devi percorrere al costo di 0.21 € ?'));

// chiedere l'età dell'utente

const userAge = Number(prompt('Quanti anni hai?'));

console.log(Km, userAge);

// applicare il 20% di sconto per i minorenni

// applicare il 40% di sconto per gli over 65

// calcolare il prezzo del viaggio

let prezzoDiViaggio = Km * 0.21;

if(userAge < 18){
    prezzoDiViaggio = prezzoDiViaggio - (prezzoDiViaggio * 0.2);
} else if(userAge > 65){
    prezzoDiViaggio = prezzoDiViaggio - (prezzoDiViaggio * 0.4);
}

// stampare il messaggio con il prezzo in console includendo anche due cifre decimali

console.log(prezzoDiViaggio.toFixed(2));

// stampare il messaggio con il prezzo in pagina includendo anche due cifre decimali

const speseElement = document.getElementById('spese');
console.log(speseElement);

speseElement.innerHTML = 'Ciao, il costo sarà pari a : ' + prezzoDiViaggio.toFixed(2) + ' €'
















