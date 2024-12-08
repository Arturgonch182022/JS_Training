//Задача 1: Работа с промисами
//
// Условие: Необходимо выполнить параллельно три запроса к различным публичным API:
// Получить данные о пользователях.
// Получить данные о постах.
// Получить данные о комментариях.
//
// // Устанавливаем URL-адреса для запросов
// const usersUrl = 'https://jsonplaceholder.typicode.com/users';
// const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
// const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';
//
// Все эти запросы нужно выполнить параллельно с использованием Promise.all,
// а затем вывести результат в консоль, когда все данные будут получены.
// Создайте функцию fetchData, которая будет принимать URL и возвращать промис.

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

function fetchAllData() {
    return Promise.all([
        fetchData(usersUrl),
        fetchData(postsUrl),
        fetchData(commentsUrl)
    ]);
}

fetchAllData()
    .then(([users, posts, comments]) => {
        console.log('Users:', users);
        console.log('Posts:', posts);
        console.log('Comments:', comments);
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });
