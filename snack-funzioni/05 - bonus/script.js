/* Scrivi una funzione che accetti una stringa contenente un nome e restituisca un saluto seguito dal nome fornito. 
Il saluto deve essere :
buongiorno se è mattina (fino alle 13), 
buon pomeriggio se è pomeriggio (fino alle 17) 
e buonasera se è sera (oltre le 17)
*/

const name = 'Mario';


// Dichiara la funzione qui.
const date = new Date ();
let hour = date.getHours();
let saluto;
function sayHello(hello, name){
  if (hour >= 0 && hour < 13){
    hello = 'Buongiorno';
  } else if (hour >= 13 && hour < 17){
    hello = 'Buon Pomeriggio';
  } else {
    hello = 'Buonasera';
  }
  return hello + ' ' + name;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(sayHello(saluto, name));


//Risultato atteso se si passa 'Mario' alle 18: // Buonasera Mario.