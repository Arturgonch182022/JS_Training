//Задача 2: Класс с приватными свойствами
// Условие:
// Создайте класс Person, который будет иметь два свойства:
// Приватное свойство #name (имя).
// Приватное свойство #age (возраст).
// Создайте методы getName() и getAge() для доступа к этим свойствам (геттеры).
class Person{
    #name = "Artur";
    #age = 21;

    get getName(){
        return this.#name;
    }

    get getAge(){
        return this.#age;
    }
}

let person = new Person();
console.log(person.getName);
console.log(person.getAge);
