// Bonus 1 · Febbraio bisestile
// La consegna è nel README, alla voce "Bonus 1 · Febbraio bisestile".

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
function verificaAnnoBisestile(annoBisestile){
  if ((annoBisestile % 4 === 0 && annoBisestile % 100 !== 0) || annoBisestile % 400 === 0){
    return true
  } else{
    return false
  }
}

function contaGiorniDelMese(mese, annoBisestile){
const giorniMese = [31, 28, 31, 30, 31, 30, 31, 31, 30, 31, 30, 31];
const indice = mese - 1;  
  if (mese === 2 && verificaAnnoBisestile(annoBisestile) === true){
    return 29
  }
return giorniMese[indice] || 0
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(contaGiorniDelMese(2, 2025))
