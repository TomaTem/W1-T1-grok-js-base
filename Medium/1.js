/*

Создайте функцию, которая принимает в качестве аргумента строку и выводит каждый символ этой строки в консоль.

*/

const logEachLetter = (str) => {
    /* Тут код*/
    for (let char of str) {
        console.log(char);
    }
}

module.exports = logEachLetter