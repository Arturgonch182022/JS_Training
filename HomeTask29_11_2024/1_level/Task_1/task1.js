//Задача 1: Создание класса
// Условие:
// Создайте класс Book, который будет представлять книгу. Класс должен содержать:
// Конструктор для инициализации названия книги и имени автора.
// Метод getBookInfo(), который возвращает строку с информацией о книге (название и автор).
// Что необходимо сделать:
// Создайте объект класса Book.
// Вызовите метод getBookInfo() для вывода информации о книге.
class Book{
    constructor(name, author){
        this.name = name;
        this.author = author;
    }

    get name(){
        return this._name;
    }

    set name(name){
        this._name = name;
    }

    get author(){
        return this._author;
    }

    set author(author){
        this._author = author;
    }
    getBookInfo(){
        console.log('Название книги: ' + this.name + ', Автор ' + this.author );
    }
}

book = new Book('Волк с Уолл-стрит', 'Джордан Белфорт');
book.getBookInfo();