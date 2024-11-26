//Используя IIFE, создайте блок кода, где переменная x доступна только внутри функции.
// Внутри функции выполните следующую логику:
// Генерируйте массив случайных чисел длиной 5.
// Найдите минимальное и максимальное значение в массиве.
// Выведите массив, минимальное и максимальное значение.
(function() {
    const x = 'Переменная x доступна только внутри функции';

    const randomNumbers = Array.from({ length: 5 }, () => Math.floor(Math.random() * 100));

    const minValue = Math.min(...randomNumbers);
    const maxValue = Math.max(...randomNumbers);

    console.log("Сгенерированный массив:", randomNumbers);
    console.log("Минимальное значение:", minValue);
    console.log("Максимальное значение:", maxValue);
    console.log(x);
})();