//2. Преобразование массива
// Создайте стрелочную функцию,
// которая принимает массив чисел и возвращает новый массив, где все числа умножены на 2.
const arrayMultiplication2 = (a) => a.map((number)=> number * 2);
console.log(arrayMultiplication2([1,2,3,4]));