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
   
