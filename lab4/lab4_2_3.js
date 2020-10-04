//2: Извлечь из строки все числа (числом считать одну или несколько цифр,
//идущих подряд).

const str = 'asdfgh dfgh sabjdhajshdas d3627 419h ch28c1 4x21h983e4 12';
//extracts numbers
const numberCheck = /\d+/g;

let result = str.match(numberCheck);
console.log(result);

/*3: Пользователь вводит свои имя и фамилию (два слова, разделённые
пробелом). Проверить правильность ввода, вывести сначала фамилию, затем имя.
Рекомендации:
Можно использовать скобочные группы для обнаружения подшаблонов*/

let username = prompt("Please enter your full name:");

//validates the name, outputs name and surname
checkName = (username) => {
    const fullNameReg = /^[а-яА-Яa-zA-Z]+ [а-яА-Яa-zA-Z]+$/g
    if(username.length < 0) return console.log('Enter a valid name')
    if (!fullNameReg.test(username)) return console.log('Enter a valid name')
    let result = username.match(fullNameReg);
    let [name, surname] = result[0].split(' ');
    console.log(`name: ${name}, surname: ${surname}`);
}

checkName(username);