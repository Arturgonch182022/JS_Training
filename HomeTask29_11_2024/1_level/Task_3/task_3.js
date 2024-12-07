//Задача 3: Пример наследования классов
// Условие:
// Создайте два класса:
// Базовый класс Animal — для описания животных с методами для вывода информации о животном.
// Наследуемый класс Dog — для описания собак, который наследует от класса Animal и
// переопределяет метод для вывода сообщения о том, что собака лает.
class Animal{

    constructor(name){
        this.name = name;
    }
    set name(name){
        this._name = name;
    }

    get name(){
        return this._name;
    }

    greet(){
        console.log("Я " + this.name);
    }
}

class Dog extends Animal{
    constructor(props) {
        super(props);
    }
    greet(){
        super.greet();
        console.log("Гав_Гав!")
    }
}

let dog = new Dog("Рыжик");
dog.greet();

let animal = new Animal("пока что никто");
animal.greet();