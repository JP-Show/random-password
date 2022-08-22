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
console.log(new RandomPassword().makePassword(7));
