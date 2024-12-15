//Задача 2: Работа с try/catch
// Условие:
// Напишите функцию divideNumbers,
// которая принимает два числа и возвращает результат их деления.
// Если второе число — это 0, функция должна выбросить ошибку с сообщением "Нельзя делить на 0",
// а если оба аргумента не числа, то ошибка должна быть выброшена с сообщением "Ожидались числа".
// Используйте try/catch для обработки ошибок.
// Требования:
// Если оба аргумента являются числами и второе число не равно 0,
// функция должна вернуть результат деления.
// Если второе число равно 0, выбрасывается ошибка "Нельзя делить на 0".
// Если хотя бы один из аргументов не является числом, выбрасывается ошибка "Ожидались числа".

function divideNumbers(numerator, denominator) {
    try {
        if (typeof numerator !== 'number' || typeof denominator !== 'number') {
            throw new Error("Ожидались числа");
        }

        if (denominator === 0) {
            throw new Error("Нельзя делить на 0");
        }

        return numerator / denominator;
    } catch (error) {
        return error.message;
    }
}

// Примеры использования
console.log(divideNumbers(4, 2));
console.log(divideNumbers(4, 0));
console.log(divideNumbers('a', 2));
console.log(divideNumbers(4, 'b'));
console.log(divideNumbers('a', 'b'));