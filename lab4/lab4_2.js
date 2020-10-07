//2: Извлечь из строки все числа (числом считать одну или несколько цифр,
//идущих подряд).

const str = 'asdfgh dfgh sabjdhajshdas d3627 419h ch28c1 4x21h983e4 12';
//extracts numbers
const numberCheck = /\d+/g;

let result = str.match(numberCheck);
console.log(result);
