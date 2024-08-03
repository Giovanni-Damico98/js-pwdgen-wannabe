/*
1 - Recupero l'elemento dalla pagina html
2 - Chiedo all'utente il suo nome
3 - Chiedo all'utente il suo cognome
4 - Chiedo all'utente il suo colore preferito
5 - Stampo in console la concatenazione di nome,cognome,colorePreferito e 21
6 - Stampo il punto 5 anche nella pagina
*/

// Fase preparatoria
// Recupero l'elemento dalla pagina html
const myDiv = document.getElementById("my-div");

// Fase di raccolta dati
// Chiedo all'utente il suo nome
// Chiedo all'utente il suo cognome
// Chiedo all'utente il suo colore preferito
// Creo la variabile con il numero 21
const firstName = window.prompt("Qual è il tuo nome?", "Giovanni");
const lastName = window.prompt("Qual è il tuo cognome?", "DAmico");
const favouriteColor = window.prompt(
  "Qual è il tuo colore preferito?",
  "Rosso"
);
const number = 21;

// Fase di elaborazione dati
const password = `${firstName}${lastName}${favouriteColor}${number}`;

// Fase di produzione output
// Stampo in console la concatenazione di nome,cognome,colorePreferito e 21
// Stampo il punto 5 anche nella pagina
console.log(password);
myDiv.innerText = `'La tua password è: ${password}`;
