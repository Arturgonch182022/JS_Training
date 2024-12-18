//Задача 2:
// Условие:
// У вас есть контейнер с id container, и кнопка с текстом "Добавить параграф".
// Напишите JavaScript-код, который добавляет новый параграф с текстом "Новый параграф"
// в контейнер при каждом нажатии на кнопку.
// Шаги:
// На странице создайте пустой контейнер с id container.
// Добавьте кнопку с текстом "Добавить параграф".
// Напишите JavaScript-функцию,
// которая будет создавать новый элемент <p> с текстом "Новый параграф" и добавлять его в контейнер.
// Для создания нового элемента используйте document.createElement()
// и добавьте его в контейнер с помощью appendChild().
// Ожидаемый результат: При каждом нажатии на кнопку
// в контейнер будет добавляться новый параграф с текстом "Новый параграф".
const addButton = document.getElementById("addButton");
const container = document.getElementById("container");

addButton.addEventListener('click',function (){
    const newParagraph = document.createElement('p');
    newParagraph.textContent = "Новый параграф";
    container.appendChild(newParagraph);
});