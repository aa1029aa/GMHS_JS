let pozdrav = "Zdravím"; //Global Scope


function sayHello() { // Deklarace funkce
    let pozdravFunkce = "Pozdrav z Funkce"
    console.log(pozdravFunkce)
}

if(true) {
    let zprava = "Toto je bloková zpráva"
    console.log(zprava)
}


sayHello(); // Volání funkce

function pozdrav2(name) {
    console.log("Zdravím" + name);
}
pozdrav2("Honza")


function calc(num1,num2) {
    console.log(num1+num2)
     console.log(num1-num2)
      console.log(num1*num2)
       console.log(num1/num2)
}

calc(8,3.14159265358979323846264338327950288419716939937510582097494459230781)
