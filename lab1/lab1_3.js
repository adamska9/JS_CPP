/*LAB 1 exercise 90. Дана строка, представляющая из себя арифметическое выражение,
состоящее из чисел, скобок и арифметических операций. Проверьте данное выражение на
правильность расстановки скобок.*/

let str = '[{1(8(8)}]=8';
const foo_check = str => {
    let stack = [];
    let map = {
        '(': ')',
        '[': ']',
        '{': '}'
    }
    for(let i = 0 ; i < str.length; i++){
        if(str[i] === '(' || str[i] === '[' || str[i] === '{')
            {stack.push(str[i]);}
        else if(str[i] === ')' || str[i] === ']' || str[i] === '}')
        {let last = stack.pop();
        //if the current bracet doesnt correspond to the last one in stack its unbalanced
        if(str[i] !== map[last]){
        return false;}
        }
    }
    //if a bracet is left in the stack its unbalanced
    if (stack.length !== 0) return false;
    return true;
}
console.log(`String: ${str}\n${foo_check(str)}`);
