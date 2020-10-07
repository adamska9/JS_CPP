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