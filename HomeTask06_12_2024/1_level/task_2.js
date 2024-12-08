//Задача 2: Работа с промисами
// 	Создайте две функции step1() и step2().
// 	Первая функция должна возвращать промис,
// 	который разрешается через 1 секунду с текстом "Шаг 1 выполнен".
// 	Вторая функция должна возвращать промис,
// 	который разрешается через 2 секунды с текстом "Шаг 2 выполнен".
// 	Используйте цепочку промисов для последовательного выполнения этих шагов.
function step1(){
    return new Promise(resolve => setTimeout(() => resolve("Шаг 1 выполнен"), 1000));
}

function step2(){
    return new Promise(resolve => setTimeout(() => resolve("Шаг 2 выполнен"), 2000));
}

let stepPromise = step1();
stepPromise.then(result => {console.log(result); return step2();}).then(result => console.log(result));