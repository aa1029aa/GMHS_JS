function jeSude(cislo) {
    if (cislo % 2 === 0) {
        return true;
    } else {
        return false;
    }
}

// test
console.log(jeSude(10)); // true
console.log(jeSude(7));  // false