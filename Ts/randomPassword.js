"use strict";
class RandomPassword {
    constructor(classInputsChecks, idButton, idDisplayPassword, idLenghtPassword) {
        this.character = '';
        this.password = '';
        this.classInputsChecks = classInputsChecks;
        this.idButton = idButton;
        this.idDisplayPassword = idDisplayPassword;
        this.idLenghtPassword = idLenghtPassword;
    }
    set_inputs_check() {
        let checkboxes = document.querySelectorAll(`.${this.classInputsChecks}`);
        for (let checkbox of checkboxes) {
            checkbox.addEventListener('click', () => {
                if (checkbox.checked) {
                    this.character += checkbox.value;
                }
                else {
                    this.character = this.character
                        .split(checkbox.value)
                        .toString()
                        .replace(',', '');
                }
            });
        }
    }
    randomPosition(min = 0, max = this.character.length) {
        return Math.round(Math.random() * (max - min) + min);
    }
    make_password() {
        const valueLenght = (document.getElementById(`${this.idLenghtPassword}`));
        const v = valueLenght.valueAsNumber;
        const lenCharac = this.character.length;
        if (lenCharac > 0) {
            this.password = '';
            for (let high = 0; high != v; high++)
                this.password = this.password.concat(this.character.charAt(this.randomPosition()));
            console.log(this.password);
        }
        else {
            alert('selecione algo');
        }
    }
    show_password() {
        var _a;
        this.set_inputs_check();
        const displayerPassword = (document.getElementById(`${this.idDisplayPassword}`));
        (_a = document
            .getElementById(`${this.idButton}`)) === null || _a === void 0 ? void 0 : _a.addEventListener('click', () => {
            this.make_password();
            displayerPassword.value = this.password;
        });
    }
}
new RandomPassword('checkPasswords', 'makePassord', 'displayPassword', 'quantyLenght').show_password();
