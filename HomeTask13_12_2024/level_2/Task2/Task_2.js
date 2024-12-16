//Задача 2:
// Условие:
// Напишите скрипт, который будет отслеживать количество кликов на кнопку
// и показывать это количество в div-элементе.
// Требования:
// Есть кнопка, при клике на неё будет увеличиваться счётчик.
// Счётчик должен отображаться в div.
// Пример HTML:
// <button id="clickButton">Нажми меня</button>
// <div id="counter">Количество кликов: 0</div>
let clickCount = 0;

const clickButton = document.getElementById('clickButton');
const counter = document.getElementById('counter');

clickButton.addEventListener('click', function () {
    clickCount++;
    counter.textContent = `Количество кликов: ${clickCount}`;
});