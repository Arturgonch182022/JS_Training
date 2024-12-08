const usersUrl = 'https://jsonplaceholder.typicode.com/users';
const postsUrl = 'https://jsonplaceholder.typicode.com/posts';
const commentsUrl = 'https://jsonplaceholder.typicode.com/comments';

function fetchData(url, controller) {
    return fetch(url, { signal: controller.signal })
        .then(response => {
            if (!response.ok) {
                throw new Error(`Ошибка: ${response.status}`);
            }
            return response.json();
        });
}

function fetchWithTimeout(url, timeout, controller) {
    let isTimeout = false;

    const timeoutPromise = new Promise((_, reject) => {
        const timer = setTimeout(() => {
            isTimeout = true;
            controller.abort();
            reject(new Error("Больше 5 секунд"));
        }, timeout);

        fetchData(url, controller).finally(() => {
            if (!isTimeout) {
                clearTimeout(timer);
            }
        });
    });

    return Promise.race([
        fetchData(url, controller),
        timeoutPromise
    ]);
}

function fetchAllData() {
    const controller = new AbortController();

    return Promise.all([
        fetchWithTimeout(usersUrl, 5000, controller),
        fetchWithTimeout(postsUrl, 5000, controller),
        fetchWithTimeout(commentsUrl, 5000, controller)
    ]);
}

fetchAllData()
    .then(results => {
        console.log("Всё хорошо, меньше 5 секунд!");
    })
    .catch(error => {
        console.error('Произошла ошибка:', error);
    });