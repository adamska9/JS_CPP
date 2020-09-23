/*64. В массиве из n элементов выбрать без повторений все элементы,
встречающиеся более одного раза.*/

let arr = Array.from({length:10}, () => Math.floor(Math.random() * 20));
const check = (arr) => {
    let setIn =  new Set();
    let setOut = new Set();
    arr.forEach(element => {
        if (setIn.has(element))
            setOut.add(element);
        else 
            setIn.add(element)
    });
    return setOut;
}
console.log(arr)
console.log(check(arr));