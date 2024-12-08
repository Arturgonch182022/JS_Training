//Задача 1: Работа с промисами
// Условие:
// Создайте функцию wait(ms), которая принимает один аргумент ms (количество миллисекунд)
// и возвращает Promise.
// Этот Promise должен разрешаться через указанное количество миллисекунд.
function wait(ms){
    return new Promise((resolve) => setTimeout(() => resolve("Сделано через 4000 ms"), ms));
}

const w = wait(4000);

w.then(result => console.log(result));
console.log("0 ms");