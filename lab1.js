/*LAB 1 exercise 21 Дана строка из 6-ти цифр. Проверьте, что сумма первых трех цифр
равняется сумме вторых трех цифр. Если это так – выведите да, в противном случае
выведите нет*/

let str = `2,2,3,2,2,3`;
//converts the string into an array
let nums = str.split(`,`).map(n => +n);
console.log(`The array: ${nums}`);
//counts the sum 
const sum = (arr, start) => {
    let sumAr = 0;
    for (let i = start; i < start+3; i++) 
        sumAr += arr[i]; 
    return sumAr
}; 
let sum1 = sum(nums, 0), sum2 = sum(nums, 3);
(sum1 === sum2) ? console.log(`yes`) : console.log(`no`);


