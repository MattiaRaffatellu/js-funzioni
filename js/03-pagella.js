// Traccia 03 · Lo scritto vale doppio
// La consegna è nel README, alla voce "03 · Lo scritto vale doppio".

/*
  LE QUATTRO DOMANDE (una risposta per ogni funzione)
  Come si chiama?
  Di quali dati ha bisogno?
  Deve restituire qualcosa?
  Di che tipo?

  STEPS
  1 -raccolgo i dati  
  2 -creo la funzione e faccio eseguire i cacoli per restituirmi la media 
  3 -verifico con un console.log
*/

// # La funzione
function calcolaMediaPonderata(scritto, orale) {
return ((scritto + scritto + orale) / 3).toFixed(1)
}


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"

console.log(calcolaMediaPonderata(7, 9))
console.log(calcolaMediaPonderata(3, 7))
console.log(calcolaMediaPonderata(5, 5))
console.log(calcolaMediaPonderata(9, 4))