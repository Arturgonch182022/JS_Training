//Создайте свою функцию, которая принимает 2 параметра:
//  1 - одномерный массив
// 2 - функцию для изменения элементов массива
// !!! Условие: изначальный массив, переданный в функцию не должен быть изменен!
// Пример:
// const initArr = [1, 2, 3, 4, 5];
// const callback = (item, index, array) => item * 2;
// const res = map(initArr, callback);
// console.log(initArr); // [1, 2, 3, 4, 5]
// console.log(res); // [2, 4, 6, 8, 10]
function myMagicFunction(array, callback) {
    const result = [];
    for (let i = 0; i < array.length; i++) {
        result.push(callback(array[i], i, array));
    }
    return result;
}

const initArr = [1, 2, 3, 4, 5];
const callback = (item, index, array) => item * item;

const result = myMagicFunction(initArr, callback);
console.log(initArr);
console.log(result);