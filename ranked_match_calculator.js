function rankedMatchCalculator(numberVictories, numberDefeats) {
  winningBalance = numberVictories - numberDefeats;

  if (winningBalance <= 10) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Ferro"
    );
  } else if (winningBalance <= 20) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Bronze"
    );
  } else if (winningBalance <= 50) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Prata"
    );
  } else if (winningBalance <= 80) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Ouro"
    );
  } else if (winningBalance <= 90) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Diamante"
    );
  } else if (winningBalance <= 100) {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Lendario"
    );
  } else {
    console.log(
      "O Herói tem de saldo de",
      winningBalance,
      "está no nível de Imortal"
    );
  }
}

let numberVictories = 0;
let numberDefeats = 0;
let letter = "s";

while (letter === "s") {
  numberVictories = prompt("Insira o numero de vitórias: ");
  numberDefeats = prompt("Insira o numero de derrotas: ");

  rankedMatchCalculator(numberVictories, numberDefeats);
  letter = prompt("deseja continuar? S/N ");
  letter = letter.toLowerCase();
}
