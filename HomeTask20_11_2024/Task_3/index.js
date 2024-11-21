//Что будет выведено в консоль? В случае,
// если происходит потеря контекста, то какое решение будет верным?
// const obj = {
//   name: 'Object',
//   getName: function () {
// 	return this.name;
//   }
// };
// const getName = obj.getName;
// console.log(getName());
// ответ undefined
// верное решение
const obj = {
    name: 'Object',
    getName: function () {
 	return this.name;
   }
};
const getName = obj.getName.bind(obj);
console.log(getName());