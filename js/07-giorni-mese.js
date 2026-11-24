// Traccia 07 · I giorni del mese
// La consegna è nel README, alla voce "07 · I giorni del mese".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -
  2 -
  3 -
*/

// # La funzione
function contaGiorniDelMese(mese){
const giorniMese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const indice = mese - 1;  
return giorniMese[indice] || 0
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(contaGiorniDelMese(2))
console.log(contaGiorniDelMese(3))
console.log(contaGiorniDelMese(7))
console.log(contaGiorniDelMese(13))