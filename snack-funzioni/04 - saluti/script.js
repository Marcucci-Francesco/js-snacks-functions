/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito (es. "Ciao [nome]") */

const name = 'Mario';


// Dichiara la funzione qui.
const sayHello = 'Ciao';
const saluto = (hello, people) => hello + ' ' + people;

// Invoca la funzione qui e stampa il risultato in console

console.log(saluto(sayHello, name));


//Risultato atteso se si passa 'Mario': // ciao Mario