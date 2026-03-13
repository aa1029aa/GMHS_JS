alert("Alert, experiment")
const readline = require("readline");

const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});

rl.question("Zadej věk: ", function(input) {
  let vek = Number(input);
  let jeUtery = false;
  let vernostniKarta = true;
  let cost = 0;

  if (vek < 3) {
      cost = 0
  } else if (jeUtery) {
      cost = 5
  } else if (vek >= 3 && vek <= 12) {
      cost = 5
  } else if (vek >= 13 && vek <= 17) {
      cost = 7
  } else if (vek >= 18 && vek <= 64) {
      cost = 10
  } else if (vek >= 65) {
      cost = 6
  }

  if (cost > 0 && vernostniKarta) {
      cost = cost - 2
  }

  console.log("Cena: " + cost + " $");

  rl.close();
});