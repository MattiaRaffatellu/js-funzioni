// Traccia 02 · Il cambio in aeroporto
// La consegna è nel README, alla voce "02 · Il cambio in aeroporto".

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
function calcolaDollariRicevuti(importoEuro, commissione, tasso) {
  
  if (importoEuro > commissione){
    return ((importoEuro - commissione) * tasso) .toFixed(2)
  }
   else{
  return 0
}
}
// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaDollariRicevuti(100, 5, 1.08))
console.log(calcolaDollariRicevuti(3, 5, 1.08))
console.log(calcolaDollariRicevuti(20, 5, 1.08))