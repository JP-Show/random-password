"use strict";
class RandomPassword {
    oneRandom() {
        const aIndice = Math.random().toString().charAt(2);
        return aIndice;
    }
    makePassword(length) {
        let pass = '';
        for (let a = []; a.length <= length; a.push(this.oneRandom())) {
            pass = a.toString();
        }
        for (pass; pass.length != length; pass = pass.replace(',', '')) { }
        return pass;
    }
}
console.log(new RandomPassword().makePassword(10));
console.log(new RandomPassword().oneRandom());
let arr = 'abcdefghijklmnopqrstuvxwyz';
function getRandomArbitrary(min = 0, max = arr.length - 1) {
    return Math.round(Math.random() * (max - min) + min);
}
let password = '';
for (let i = ''; i.length != 16; i = i.concat(arr.charAt(getRandomArbitrary()))) {
    password = i;
}
console.log(password);
