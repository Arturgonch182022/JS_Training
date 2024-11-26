//Создайте генератор arrayIterator,
// который принимает массив и возвращает его элементы по одному на каждой итерации.
// const gen = arrayIterator(['apple', 'banana', 'cherry']);
// console.log(gen.next().value); // 'apple'
// console.log(gen.next().value); // 'banana'
// console.log(gen.next().value); // 'cherry'
// console.log(gen.next().done);  // true
function* arrayIterator(array) {
    for (const item of array) {
        yield item;
    }
}
const gen = arrayIterator(['apple', 'banana', 'cherry']);
console.log(gen.next().value); // 'apple'
console.log(gen.next().value); // 'banana'
console.log(gen.next().value); // 'cherry'
console.log(gen.next().done);  // true