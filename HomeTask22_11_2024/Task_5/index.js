//Напишите функцию для вычисления суммы всех элементов массива с использованием рекурсии
// и именованного функционального выражения (NFE).
//  - Функция должна принимать массив чисел и возвращать сумму всех его элементов.
//  - Используйте рекурсию для вычисления суммы.
//  - Используйте именованное функциональное выражение для определения рекурсивной функции.
const getSumOfArray = function sumArrayRecursion(array) {
    if (array.length === 0) {
        return 0;
    }
    if (array.length === 1) {
        return array[0];
    }
    return array[0] + sumArrayRecursion(array.slice(1));
};
console.log(getSumOfArray([1, 2, 3, 4, 5]));
console.log(getSumOfArray([]));