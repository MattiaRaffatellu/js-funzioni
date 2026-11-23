// Traccia 05 · La fascia d'età
// La consegna è nel README, alla voce "05 · La fascia d'età".

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
function trovaFasciaEta(eta){
  if (eta <1 || eta >120){
    return 'Età non valida'
  } else if (eta <18){
    return 'Minorenne'
  } else if (eta <36){
    return 'Giovane adulto'
  } else if (eta <61){
    return 'Adulto'
  }else {
    return 'Senior'
  }
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaFasciaEta(61))