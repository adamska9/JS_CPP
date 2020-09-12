/*LAB 1 exercise 21 Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр
равняется сумме вторых трех цифр. Если это так – выведите да, в противном случае
выведите нет*/

// let str = `2,2,3,2,2,3`;
// //converts the string into an array
// let nums = str.split(`,`).map(n => +n);
// console.log(`The array: ${nums}`);
// //counts the sum 
// const sum = (arr, start) => {
//     let sumAr = 0;
//     for (let i = start; i < start+3; i++) 
//         sumAr += arr[i]; 
//     return sumAr
// }; 
// let sum1 = sum(nums, 0), sum2 = sum(nums, 3);
// (sum1 === sum2) ? console.log(`yes`) : console.log(`no`);


/*LAB 1 exercise 64. Даны две строки. Определите, можно ли из некоторых символов первой
строки и всех символов второй строки составить новую строку, в которой каждый символ
встречается ровно два раза.*/

// let str1 = `abcd`, str2 = `abcdkasgfujds`;
// //checks if str2 contains all the letters from str1
// const foo_check = (str1, str2) => {
//     let check = true;
//     for(let i = 0 ; i < str1.length; i++){
//         if(!str2.includes(str1.charAt(i))){ 
//             return check = false;
//         }
//     } return check;
// }
// console.log(foo_check(str1,str2));


/*LAB 1 exercise 90. Дана строка, представляющая из себя арифметическое выражение,
состоящее из чисел, скобок и арифметических операций. Проверьте данное выражение на
правильность расстановки скобок.*/

// let str = '[{1(8(8)}]=8';
// const foo_check = str => {
//     let stack = [];
//     let map = {
//         '(': ')',
//         '[': ']',
//         '{': '}'
//     }
//     for(let i = 0 ; i < str.length; i++){
//         if(str[i] === '(' || str[i] === '[' || str[i] === '{')
//             {stack.push(str[i]);}
//         else if(str[i] === ')' || str[i] === ']' || str[i] === '}')
//         {let last = stack.pop();
//         //if the current bracet doesnt correspond to the last one in stack its unbalanced
//         if(str[i] !== map[last]){
//         return false;}
//         }
//     }
//     //if a bracet is left in the stack its unbalanced
//     if (stack.length !== 0) return false;
//     return true;
// }
// console.log(foo_check(str));


/*LAB 1 exercise 132. Даны натуральные числа от 35 до 87. Вывести на консоль те из них,
которые при делении на 7 дают остаток 1, 2 или 5.*/

// let arr = [];
// const fun = arr => {
//     for(let i = 35; i < 88; i++){
//         let x = i%7;
//         if(x === 1 || x === 2 || x === 5)
//         arr.push(i);
//     }
//     return arr;
// }
// console.log(fun(arr));


/*LAB 1 exercise 178. Составить программу перевода радианной меры угла в градусы, минуты и
секунды.*/

//a class that converts grad
class Convert {
    constructor(rad) {
        this.rad = rad;
        this.grad = rad * 63.66198;
        this.min = rad * 3437.7467708;
        this.sec = rad * 206264.80625;
    }
    print() {
        console.log(`Rad: ${this.rad} \nGrad: ${this.grad} \nMin: ${this.min} \nSec: ${this.sec}`)
    }
}
(new Convert(1)).print();