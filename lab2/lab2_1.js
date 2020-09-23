/*21. Напишите функцию, которая находит разность двух массивов.*/

let arr1 = [1,2,3,3,7,[8,[6]]], arr2 = [3,[12,[14,2]],5,6,[8,9]];

const difference = (arr1, arr2) => {
    //creates an arr out of flattened argument arrays
    const arrN = (arr1.flat(Infinity)).concat(arr2.flat(Infinity));
    arrOut = [], i = 0, result = {};
    //fills the concatenated array with nums of 2 given arrays
    for(let i of arrN){
        if(!result[i])
            result[i] = 0;
        result[i]++;
    }
    //fills the array of numbers that appear only once
    for(let [key, value] of Object.entries(result)){
        if(value === 1) {
            arrOut[i] = key;
            i++;
        }
    }
    console.log(arrOut);
}

difference(arr1, arr2);