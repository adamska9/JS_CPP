/*Характеристикой строки целочисленной матрицы A(n х m) назовем сумму её
положительных четных элементов. Переставляя строки заданной матрицы, расположить
их в соответствии с ростом их характеристик.*/

let arr = [], arr_prop = [];

//generating rows, calculating sum
for (let i = 0; i < 3; i++){
    arr.push(Array.from({length:3}, () => Math.floor(Math.random() * 20)));
    arr_prop.push((arr[i].filter(x => x % 2 === 0)).reduce((a, b) => a + b, 0));
}
console.log(`Starting array: ${arr}\nSorted: `);
//combining the arrays:
var list = [];
for (let i = 0, len = arr.length; i < len; i++) 
    list.push({'row': arr[i], 'sum': arr_prop[i]});

// sort:
list.sort(function(a, b) {
    return ((a.sum < b.sum) ? -1 : ((a.sum == b.sum) ? 0 : 1));
});

console.log(list)
