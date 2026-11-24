// Traccia 09 · Quanto manca alla pensione
// La consegna è nel README, alla voce "09 · Quanto manca alla pensione".

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
function trovaEtaPensione(lavoro) {
  if (lavoro === 'ordinario'){
    return 67
  } else if (lavoro === 'usurante'){
    return 62
  }
}

function calcolaAnniAllaPensione(annoNascita, annoCorrente, lavoro){
  const etaAttuale = annoCorrente - annoNascita;
  const anniAllaPensione = trovaEtaPensione(lavoro) - etaAttuale;
  if (anniAllaPensione <= 0){
    return 0
  }else {
    return anniAllaPensione
  }
}





// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaEtaPensione('ordinario'))
console.log(calcolaAnniAllaPensione(1970, 2026, 'ordinario'))