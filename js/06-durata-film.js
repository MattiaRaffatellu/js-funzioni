// Traccia 06 · La durata del film
// La consegna è nel README, alla voce "06 · La durata del film".

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
function formattaDurata(minutiTotali){
  const ore = Math.floor (minutiTotali / 60) ;
  const minutiRestanti = minutiTotali % 60; 
   if (ore === 1 && minutiRestanti === 0){
    return `${ore} ora`
   }else if (ore > 1 && minutiRestanti === 0){
    return `${ore} ore`
  }else if (ore < 1){
    return `${minutiRestanti} minuti`
   }else if (ore === 1 && minutiRestanti > 0){
      return `${ore} ora ${minutiRestanti} minuti`
   }else if (ore >= 2){
    return `${ore} ore ${minutiRestanti} minuti`
   } else {
    return `${0} minuti`
   }
}

// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(formattaDurata());

