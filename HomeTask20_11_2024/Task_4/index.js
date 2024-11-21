//У вас есть функция greet,
// которая принимает имя и выводит приветственное сообщение.
// Напишите, как вы могли бы использовать методы
// call, apply, и bind для вызова этой функции с контекстом объекта person.
// const person = { name: 'Alice' };
function greet() {
    return `Добрый день, ${this.name}!`;
}
const person = { name: 'Alice' };

const getGreetBind = greet.bind(person);
console.log(getGreetBind());

console.log(greet.call(person));
console.log(greet.apply(person));
