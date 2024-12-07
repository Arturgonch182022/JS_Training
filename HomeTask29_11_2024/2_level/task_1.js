//2 уровень:
// Задача 1: Работа с классами
// Условие:
//
// Напишите два класса:
// Класс Person:
// В нем должно быть приватное поле _name, которое хранит имя.
// Необходимо добавить метод getName() для получения имени.
// Также должен быть метод setName(newName) для изменения имени.
// Использование приватных полей должно быть строго ограничено внутри класса,
// доступ к ним извне возможен только через методы.
class Person {
    #name;

    constructor(name) {
        this.setName(name);
    }

    // Метод для установки имени
    setName(newName) {
        this.#name = newName;
    }

    getName() {
        return this.#name;
    }
}

let person = new Person('Artur');
//console.log(person.getName());

// Класс Student, наследующийся от Person:
// Класс Student должен добавлять новое приватное поле _grade (оценка).
// Для работы с этим полем нужно использовать геттер и сеттер:
// getGrade() для получения оценки.
// setGrade(newGrade) для изменения оценки.
// Важно, чтобы при установке оценки в Student,
// значение было проверено на допустимость (например, оценка должна быть в пределах от 1 до 5).
class Student extends Person {
    #grade;

    constructor(props, grade) {
        super(props);
        this.setGrade = grade;
    }

    set setGrade(newGrade) {
        if (newGrade >= 1 && newGrade <= 5) {}
        this.#grade = newGrade;
    }

    get getGrade() {
        return this.#grade;
    }
}

student = new Student("Artur", 5);
console.log(student.getGrade);
