// Bonus 2 · Il programma del taxi
// La consegna è nel README, alla voce "Bonus 2 · Il programma del taxi".

/*
  STEPS
  1 -
  2 -
  3 -
  4 -
*/

// # Fase di preparazione: qui vanno anche le funzioni

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
// # Fase di raccolta dati


// # Fase di elaborazione


// # Fase di output

