"use strict";
function nameCheckBoxs() {
    const checkBoxs = ['Number', 'Lowcase', 'Uppercase', 'Special'];
    for (let i = 0; i != checkBoxs.length; i++) {
        return `${checkBoxs[i]}`;
    }
}
console.log(nameCheckBoxs());
