/*132 Дана квадратная матрица. Вывести на экран элементы, стоящие на диагонали.*/

//generate a square matrice
const matrix = x => {
    let arr = [];
    for (let i = 0; i < x; i++){
        arr.push(Array.from({length:x}, () => Math.floor(Math.random() * 10)));
    }
    console.log(arr)
    return arr;
}

//display diagonal values
const display = matrice => {
    let diag = [];
    for (let i = 0, len = matrice.length; i < len; i++){
        diag.push(matrice[i][i])
    }
    return diag;
}

console.log(display(matrix(5)))