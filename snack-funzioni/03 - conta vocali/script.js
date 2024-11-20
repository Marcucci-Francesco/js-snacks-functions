/* Scrivi una funzione che accetti una stringa e restituisca il numero di vocali contenute al suo interno */

const word = 'javascript';


// Dichiara la funzione qui.
function counterVowels(letter){
  const vowels = ['a', 'e', 'i', 'o', 'u'];
  let numberLetter = 0;
  for (let i = 0; i < letter.length; i++){
    if (vowels.includes(letter[i])){
      numberLetter++;
    }
  }
  return numberLetter;
}

// Invoca la funzione qui e stampa il risultato in console

console.log('Il numero di vocali presenti è:', counterVowels(word));


//Risultato atteso se si passa 'javascript': 3 (a, a, i)