//Задача 2: Создание классов для работы с геометрическими фигурами
// Условие:
//
//
// Создайте абстрактный базовый класс Shape для представления геометрической фигуры.
// Используйте наследование для создания классов Rectangle и Circle, которые наследуют от Shape.
// В классе Shape должно быть приватное поле #name, которое хранит название фигуры.
// В классе Rectangle и Circle переопределите метод getArea(),
// который будет вычислять площадь фигуры. Это демонстрирует полиморфизм.
// В классе Shape создайте статическое поле count,
// которое отслеживает количество созданных объектов фигур.
// Что необходимо сделать:
// Создайте объекты классов Rectangle и Circle и покажите,
// как работает полиморфизм (переопределение методов).
// Продемонстрируйте работу статического поля, отслеживающего количество объектов.
class Shape {
    static count = 0;

    #name;

    constructor(name) {
        this.setName = name;
        Shape.count++;
    }
    get getName() {
        return this.#name;
    }

    set setName(name){
        this.#name = name;
    }

    getArea(cur){
        console.log("Площадь фигуры " + this.getName + " = " + cur);
    }


}

class Rectangle extends Shape {
    #width;
    #length;

    constructor(props, length, width) {
        super(props);
        this.setLength = length;
        this.setWidth = width;
    }

    set setLength(length) {
        this.#length = length;
    }

    set setWidth(width) {
        this.#width = width;
    }

    get getLenth(){
        return this.#length;
    }

    get getWidth() {
        return this.#width;
    }

    getArea() {
        super.getArea(this.getWidth * this.getLenth);
    }
}

console.log(Shape.count);
let rectangle = new Rectangle("прямоугольник", 4, 5);
rectangle.getArea();

console.log(Shape.count);

class Circle extends Shape {
    #radius;

    constructor(props, radius) {
        super(props);
        this.setRadius = radius;
    }

    set setRadius(radius) {
        this.#radius = radius;
    }

    get getRadius() {
        return this.#radius;
    }

    getArea(cur) {
        super.getArea(3.14 * this.getRadius * this.getRadius);
    }
}

let circle = new Circle("Круг", 3.0);
circle.getArea();
console.log(Shape.count);
