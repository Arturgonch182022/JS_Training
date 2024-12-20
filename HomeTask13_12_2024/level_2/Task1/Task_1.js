//2 уровень:
// Задача 1:
// Условие:
// Напишите скрипт,
// который при отправке формы будет выводить введённый текст в консоль и
// предотвращать стандартное поведение отправки формы.
// Требования:
// Создайте форму с одним полем ввода и кнопкой отправки.
// При нажатии на кнопку, введённый текст должен выводиться в консоль.
// Пример HTML:
// <form id="myForm">
//     <input type="text" id="textInput" placeholder="Введите текст" />
//     <button type="submit">Отправить</button>
// </form>
const form = document.getElementById('myForm');

form.addEventListener('submit', function (event) {
    event.preventDefault();

    const inputText = document.getElementById('textInput').value;
    console.log(inputText);
});