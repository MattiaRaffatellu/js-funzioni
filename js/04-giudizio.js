// Traccia 04 · Dal voto al giudizio
// La consegna è nel README, alla voce "04 · Dal voto al giudizio".

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
function trovaGiudizio(voto){
if (voto < 1 || voto > 10){
  return 'Voto non valido'
} else if (voto <5){
  return 'Gravemente insufficiente'
} else if (voto <6){
  return 'Insufficiente'
} else if (voto <7){
  return 'Sufficiente'
} else if (voto <8){
  return 'Buono'
} else {
  return 'Ottimo'
}
}
function calcolaMediaPonderata(scritto, orale) {
return ((scritto + scritto + orale) / 3).toFixed(1)
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(trovaGiudizio(calcolaMediaPonderata(4,10)))