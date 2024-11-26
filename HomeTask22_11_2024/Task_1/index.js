//Напишите функцию через Function Expression, которая принимает строку
// и возвращает эту строку с перевернутыми словами.
// При этом сами слова должны оставаться в оригинальном порядке,
// а символы внутри каждого слова — переворачиваться.
// const reversedWords = reverseWords('Hello World');
//  console.log(reversedWords); // Вывод: "olleH dlroW"
const reversedWords = function (str) {
    let sArray = str.split(' ');

    return sArray.reduce((acc, cur) => {
        return acc + cur.split('').reverse().join('') + ' ';
    }, '').trim();
};

console.log(reversedWords('Hello World'));