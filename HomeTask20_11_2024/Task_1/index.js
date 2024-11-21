//Напишите функцию sum, которая принимает
//любое количество чисел и возвращает их сумму, используя объект arguments.
function sum(){
    let sum = 0;
    for (let i = 0; i < arguments.length; i++) {
        sum +=arguments[i];
    }
    return sum;
}

console.log(sum(1,2,3));