// Traccia 12 · Una riga sola
// La consegna è nel README, alla voce "12 · Una riga sola".

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

// # Le arrow function, con il return implicito: una riga ciascuna
const calcolaPrezzoConIva = (prezzo, iva) => prezzo - ( 1 + iva / 100);
const calcolaAreaRettangolo = (base, altezza) => base * altezza;
const verificaNumeroPari = (pari) => pari % 2 === 0 ;
const convertiCelsiusInFahrenheit = (fahrenheit) => (fahrenheit * 9) / 5 + 32; 


// # Le prove: una riga di console.log per ogni caso di "Come verifichi"
console.log(calcolaPrezzoConIva(100, 22))
console.log(calcolaAreaRettangolo(20, 50))
console.log(verificaNumeroPari(5))
console.log(convertiCelsiusInFahrenheit(8))