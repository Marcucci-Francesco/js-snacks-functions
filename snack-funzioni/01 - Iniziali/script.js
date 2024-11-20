/* Scrivi una funzione che accetti un array di nomi e restituisca nuovo un array con le iniziali di ogni parola dell'array fornito */

const names = ["Anna", "Luca", "Marco", "Adele", "Giovanni", "Alessandra"];

// Dichiara la funzione qui.
function newArray(array1) {
  let letterArray = [];
  let arrayInitial;
  for (let i = 0; i < array1.length; i++){
   arrayInitial = array1[i].at(0);
   letterArray.push(arrayInitial);
  }
  return letterArray;
}

// Invoca la funzione qui e stampa il risultato in console

console.log(newArray(names));

//Risultato atteso: ["A", "L", "M", "A", "G", "A"]