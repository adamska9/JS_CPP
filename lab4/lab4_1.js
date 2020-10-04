/*1: Пользователь вводит свои имя и фамилию (два слова, разделённые
пробелом).
1. Найти в заготовленном списке введенные данные
2. Заменить найденные данные на Иванов Иван*/


//function to check if list contains input username
const includes = (a, v) => a.indexOf(v) !== -1;

//name list and input name
let nameObject = {
    username : prompt("Please enter your full name:"),
    names : [
        'Кузьмин Иван','Петров Петр','Федоров Иван'
    ]
}

//checks name validity and presence in list
checkName = ({username, names}) => {
    const regName = /[а-яА-Яa-zA-Z]+ [а-яА-Яa-zA-Z]+/g
    if(username.length < 0) return console.log('Enter a valid name')
    if (!regName.test(username)) return console.log('Enter a valid name')
    if(includes(names,username))
        console.log(`Name present at index ${names.indexOf(username)}`);
    else console.log('Name not present in list')
    nameObject.username = username.replace(regName,'Иванов Иван');
    return nameObject;
}

console.log(checkName(nameObject));