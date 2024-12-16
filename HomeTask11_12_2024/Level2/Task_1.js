//Задача 1: Работа с async/await + try…catch, promises
// Условие:
// Используя API JSONPlaceholder, реализуйте программу, которая выполняет следующие действия:
// Получение постов:
// Сделать GET-запрос к https://jsonplaceholder.typicode.com/posts для получения списка всех постов.
// Фильтрация постов:
// Выбрать только посты, у которых id чётное.
// Получение комментариев:
// Для каждого выбранного поста сделать GET-запрос к
// https://jsonplaceholder.typicode.com/comments?postId=<ID> для получения комментариев.
// Обработка данных:
// Найти комментарий с самым длинным текстом для каждого выбранного поста.
// Сохранение результатов:
// Для каждого поста с самым длинным комментарием отправить POST-запрос на
// https://jsonplaceholder.typicode.com/posts.
// В теле запроса указать следующую информацию:
// {
//   "postId": <ID поста>,
//   "longestComment": "<Текст самого длинного комментария>"
// }
// 6. Требования:
// Использовать fetch и async/await для выполнения запросов.
// Обработать возможные ошибки на всех этапах работы программы.
// Выполнить запросы на получение комментариев параллельно для всех выбранных постов.

async function fetchPosts() {
    let response = await fetch("https://jsonplaceholder.typicode.com/posts");
    if (!response.ok) throw new Error('Ошибка при получении постов');
    return await response.json();
}

function filterEvenPosts(posts) {
    return posts.filter(post => post.id % 2 === 0);
}

async function fetchCommentsForPosts(posts) {
    return await Promise.all(posts.map(async (post) => {
        let commentResponse = await fetch(`https://jsonplaceholder.typicode.com/comments?postId=${post.id}`);
        if (!commentResponse.ok) throw new Error(`Ошибка при получении комментариев для поста ${post.id}`);
        return await commentResponse.json();
    }));
}

function findLongestComments(posts, comments) {
    return comments.map((commentList, index) => {
        let longestComment = commentList.reduce((longest, current) =>
            current.body.length > longest.body.length ? current : longest, { body: "" });
        return { postId: posts[index].id, longestComment: longestComment.body };
    });
}

async function saveLongestComments(longestComments) {
    await Promise.all(longestComments.map(async (item) => {
        let postResponse = await fetch("https://jsonplaceholder.typicode.com/posts", {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({
                postId: item.postId,
                longestComment: item.longestComment
            })
        });
        if (!postResponse.ok) throw new Error(`Ошибка при отправке данных для поста ${item.postId}`);
    }));
}

async function dataGet() {
    try {
        const posts = await fetchPosts();
        const evenPosts = filterEvenPosts(posts);
        const comments = await fetchCommentsForPosts(evenPosts);
        const longestComments = findLongestComments(evenPosts, comments);
        console.log(longestComments);
        await saveLongestComments(longestComments);
    } catch (error) {
        console.error(error);
    }
}

dataGet();