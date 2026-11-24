// Traccia 10 · Il taxi di notte
// La consegna è nel README, alla voce "10 · Il taxi di notte".

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

// # Le funzioni
function verificaOraNotturna(ore){
  if (ore >= 0 && ore <= 5){
    return true
  }else {
    return false
  } 
}

function calcolaTotaleCorsa(prezzoBase, oraPartenza, oraArrivo){
const totale = prezzoBase;
if (verificaOraNotturna(oraPartenza) || verificaOraNotturna(oraArrivo) ){
  return totale + 5 
} else {
  return totale 
}
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaTotaleCorsa(20, 20, 4))