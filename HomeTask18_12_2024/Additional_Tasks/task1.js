//1) Условие:
// Напишите функцию fetchWithRetry(url, retries),
// которая делает асинхронный запрос на указанный URL.
// Если запрос завершился с ошибкой, функция повторяет его до заданного количества раз (retries).
// P.S.: Обработайте ошибки в случае если произошла ошибка.
// Пример:
// fetchWithRetry("https://api.example.com/data", 3)
//   .then(console.log)
//   .catch(console.error);
// Результат:
// /*
// {
//   "userId": 1,
//   "id": 1,
//   "title": "sunt aut facere repellat provident occaecati excepturi optio reprehenderit",
//   "body": "quia et suscipit\nsuscipit recusandae consequuntur expedita et cum\
//   nreprehenderit molestiae ut ut quas totam\nnostrum rerum est autem sunt rem eveniet architecto"
// }
async function fetchWithRetry(url, retries) {
    let attempts = 0;

    while (attempts <= retries) {
        try {
            const response = await fetch(url);
            if (response.ok) {
                return await response.json();
            }
            throw new Error(`HTTP error! status: ${response.status}`);
        } catch (error) {
            attempts++;
            if (attempts > retries) {
                throw new Error(`Failed to fetch after ${retries + 1} attempts: ${error.message}`);
            }
            console.log(`Attempt ${attempts} failed. Retrying...`);
        }
    }
}

fetchWithRetry("https://api.example.com/data", 3)
    .then(console.log)
    .catch(console.error);