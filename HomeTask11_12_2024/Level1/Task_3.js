//Задача 3: Работа с async/await
// Условие:
// Написать функцию, которая делает HTTP-запрос к публичному API для получения данных о пользователях
// и выводит их имена в консоль.
//
// Шаги, которые должна выполнить функция:
// Сделать GET-запрос к API https://jsonplaceholder.typicode.com/users,
// чтобы получить данные о пользователях.
// Проверить, успешно ли выполнен запрос. Если нет, выбросить ошибку и обработать её.
// Преобразовать ответ API в формат JSON для дальнейшей работы.
// Перебрать массив полученных пользователей и вывести их имена в консоль.
async function dataFetch() {
    try {
        let response = await fetch("https://jsonplaceholder.typicode.com/users");

        if (!response.ok) {
            throw new Error(response.statusText);
        }
        return await response.json();
    }
    catch (error) {
        throw new Error(error.message);
    }
}

dataFetch().then(data => {
    data.forEach((user) => {
        console.log(user.name);
    })
})
    .catch(error => {
        console.error("Ошибка:", error.message);
    })

