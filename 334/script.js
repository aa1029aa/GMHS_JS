alert("alert")
let isLoggednIn = false;
let isAdmin = false;

if (isLoggednIn) {
    console.log("Vítejte na stránce");

   if (isAdmin) {
        console.log("Přístup do adminu povolen.")
    } else {
        console.log("Jsi přihlášen jako uživatel")
    }
} else {
    console.log("Nejsi přihlášený")
}

let age = 16
let hasDriverLicense = false;

if (age >= 18 && hasDriverLicense) {
    console.log("Můžeš řídit.")
} else {
    console.log("Nemůžeš řídit!")
} 

let isHoliday = false;
let isWeekend = true;

if (isHoliday || isWeekend) {
    console.log ("Máme volno");
} else {
    console.log("Musíme pracovat")
}
   
// Cvičení //

let vek = 16
let jeUtery = false
let vernostniKarta = true
let cost = 0

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

console.log("Cena: " + cost + " $")

