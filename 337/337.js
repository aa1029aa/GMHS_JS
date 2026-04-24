function ahoj() {
    console.log("Ahoj");
}

ahoj();

let greeting = "Nazdar";

function showGreeting() {
    console.log(greeting)
}

showGreeting();

function funkceUvnitr() {
    let cislo = 123;
    console.log(cislo);
}

funkceUvnitr();

// parametr a argument 
function test(name) {
    console.log("Ahoj + name");
}

test("Tomáš")
test("Honza")
test(123)

function scitani(num1, num2) {
    console.log(num1 + num2)
}

scitani(4,6)


function odcitani(num1, num2) {
    console.log(num1 - num2)
}

odcitani(10,3)


function nasobeni(num1, num2) {
    console.log(num1 * num2)
}

nasobeni(5,2)


function deleni(num1, num2) {
    console.log(num1 / num2)
}

deleni(8,2)

// Napis funkci printRange, ktera vypise do konzole všechna čísla od parametru start až po end. 

function printRange(start, end) {
  for (let i = start; i <= end; i++) console.log(i);
}

printRange(1, 5);