/*LAB 1 exercise 132. Даны натуральные числа от 35 до 87. Вывести на консоль те из них,
которые при делении на 7 дают остаток 1, 2 или 5.*/

let arr = [];
const fun = arr => {
    for(let i = 35; i < 88; i++){
        let x = i%7;
        if(x === 1 || x === 2 || x === 5)
        arr.push(i);
    }
    return arr;
}
console.log(fun(arr));