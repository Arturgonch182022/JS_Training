//Задача 2: Работа с промисами
//
// Условие:
// Вам нужно отправить несколько параллельных запросов к API,
// но если любой из запросов не завершится в течение 5 секунд,
// все запросы должны быть отменены.
// Вам нужно использовать Promise.race для выполнения запросов и таймаутов.
// Первый запрос — получение информации о пользователях.
// Второй запрос — получение информации о постах.
// Третий запрос — получение информации о комментариях.
// Если любой из запросов не завершится за 5 секунд, все запросы должны быть отменены с ошибкой.
//
// // URL-адреса для запросов
// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

function fetchData(url) {
    return fetch(url)
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        });
}

function fetchWithTimeout(url, timeout) {
    return Promise.race([
        fetchData(url),
        new Promise((_, reject) => setTimeout(() => reject(new Error("Больше 5 секунд")), timeout))
    ]);
}

function fetchAllData() {
    return Promise.all([
        fetchWithTimeout(usersUrl, 5000),
        fetchWithTimeout(postsUrl, 5000),
        fetchWithTimeout(commentsUrl, 5000)
    ]);
}

fetchAllData()
    .then(results => {
        console.log("Всё хорошо, меньше 5 секунд!");
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });

//первое решение, но я заметил что программа ждёт время таймера,
//чтобы закончить процесс, нашёл другое решение которое это фиксит
//лежит в файле task_2_fix.js
