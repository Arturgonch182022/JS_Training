//2)   Условие:
// Реализуйте метод bind() самостоятельно, который привязывает функцию к контексту.
// Пояснение: Метод bind() позволяет привязать функцию к определенному контексту.
// const person = { name: 'Alice' };
// function greet(greeting) {
// console.log(`${greeting}, ${this.name}`);
// }
// const boundGreet = greet.myBind(person, 'Hello');
// boundGreet(); // Hello, Alice

Function.prototype.myBind = function(context, ...args) {
    const originalFunction = this;

    return function(...newArgs) {
        return originalFunction.apply(context, [...args, ...newArgs]);
    };
};

const person = {name: 'Alice'};

function greet(greeting) {
    console.log(`${greeting}, ${this.name}`);
}

const boundGreet = greet.myBind(person, 'Hello');
boundGreet();

