/*178 Клеточное поле размером m x n является результатом игры в крестики-
нолики. Проверить, не закончена ли игра выигрышем крестиков.*/

import pkg from 'underscore';
const { isEqual } = pkg;

//generating the playing field
const matrice = (m, n) => {
    let arr = [];
    let len = m*n, x = Math.ceil(len/2);
    
    let charx = new Array(x).fill('X');
    let charo = new Array(len-x).fill('O');

    for (let i = 0; i < m; i++){
        arr.push(Array.from({length:n}, () => {
                let rand = Math.floor(Math.random() * 2)
                if( rand === 0 && charx.length != 0)
                    return charx.pop();
                else
                    return (charo.length != 0 ? charo.pop() : charx.pop());
            }));
    }
    console.log(arr);
    return arr;
}

//check for winning rows/diagonals
const check = matrice => {
    let x_row = [], len = matrice.length;
    let n = matrice[0].length, check = false;
    let win_row = new Array(n).fill('X');

    //checks diagonal upper left to right
    for (let i = 0; i < len; i++)
        matrice[i][i] === 'X' ? x_row.push(matrice[i][i]) :  i = len;
    if(isEqual(x_row, win_row)){
        console.log('diagonal upper left to right win');
        return check = true;
    }
    //checks diagonal upper right to left
    else{
        x_row = [];
        for (let i = 0; i < len; i++)
            matrice[i][n - 1 - i] === 'X' ? x_row.push(matrice[i][n - 1 - i]) :  i = len;
        if(isEqual(x_row, win_row)){
            console.log('diagonal upper right to left win');
            return check = true;
        }
    }
    //checks horizontal (rows)
    for(let i = 0; i < len; i++){
        if (isEqual(matrice[i], win_row)){
            console.log('horizontal win'); 
            return check = true;
        }
    }
    //checks vertical (columns)
    for (let i = 0; i < n - 1; i++){
        x_row = [];
        for(let j = 0; j < len; j++)
            matrice[j][i] === 'X' ? x_row.push(matrice[j][i]) :  j = len; 

        if (isEqual(x_row, win_row)){
            console.log('vertical win');
            return check = true; 
        }
    }
    return check;
}

console.log(check(matrice(4,4)));

