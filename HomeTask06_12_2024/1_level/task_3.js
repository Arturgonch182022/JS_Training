//Задача 3: Работа с промисами
// Условие:
// Создайте три функции task1(), task2() и task3(),
// каждая из которых возвращает промис,
// который разрешается через 1, 2 и 3 секунды соответственно с текстами "Задача 1 завершена",
// "Задача 2 завершена" и "Задача 3 завершена".
// Используйте Promise.all для одновременного выполнения всех задач и выведите результат.
function task_1(){
    return new Promise((resolve) => {setTimeout(() => resolve("Задача 1 завершена"),1000)});
}

function task_2(){
    return new Promise((resolve) => {setTimeout(() => resolve("Задача 2 завершена"),2000)});
}

function task_3(){
    return new Promise((resolve) => {setTimeout(() => resolve("Задача 3 завершена"),3000)});
}

const promis1 = task_1();
const promis2 = task_2();
const promis3 = task_3();

Promise.all([promis1, promis2, promis3]).then(result => {console.log(result)});