//Напишите функцию, которая принимает любое количество чисел и возвращает массив,
// содержащий только чётные числа.
console.log(filterEvens(1, 2, 3, 4, 5, 6)); // [2, 4, 6]
function filterEvens() {
    const numbers = Array.from(arguments);
    return numbers.filter(num => num % 2 === 0);
}
//2) попробуйте вместо Array.from использовать spread оператор
function filterEvensSpread() {
    const numbers = [...arguments];
    return numbers.filter(num => num % 2 === 0);
}
console.log(filterEvens(1, 2, 3, 4, 5, 6, 7, 8, 9, 10));