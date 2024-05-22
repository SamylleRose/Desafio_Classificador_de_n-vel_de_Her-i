let xp = 0;
let nameHero;
let letter = "s";

while ((letter = "s")) {
  nameHero = prompt("Digite o nome do herói:");
  xp = prompt("Digite o XP do herói:");

  if (xp <= 1000) {
    console.log("O Herói de nome", nameHero, "está no nível de Ferro");
  } else if (xp <= 2000) {
    console.log("O Herói de nome", nameHero, "está no nível de Bronze");
  } else if (xp <= 5000) {
    console.log("O Herói de nome", nameHero, "está no nível de Prata");
  } else if (xp <= 7000) {
    console.log("O Herói de nome", nameHero, "está no nível de Ouro");
  } else if (xp <= 8000) {
    console.log("O Herói de nome", nameHero, "está no nível de Platina");
  } else if (xp <= 9000) {
    console.log("O Herói de nome", nameHero, "está no nível de Ascendente");
  } else if (xp <= 10000) {
    console.log("O Herói de nome", nameHero, "está no nível de Imortal");
  } else {
    console.log("O Herói de nome", nameHero, "está no nível de Radiante");
  }

  letter = prompt("Deseja continuar? S/N ");
  letter = letter.toLowerCase();
}
