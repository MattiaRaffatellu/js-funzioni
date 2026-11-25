// Traccia 13 · Un parametro solo
// La consegna è nel README, alla voce "13 · Un parametro solo".

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

// # Le arrow function
const calcolaMancia = (mancia) => mancia * 0.10;
const formattaprezzo = (prezzo) => `${prezzo.toFixed(2)} €`;
const verificaMaggioreEta = (eta) => eta >= 18


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaMancia(45))
console.log(formattaprezzo(100))
console.log(verificaMaggioreEta(5))

