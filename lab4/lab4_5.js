/*5: Пользователь вводит путь к файлу на компьютере. Последовательно
вывести имена папок, которые нужно открыть, чтобы получить доступ к файлу.*/

const pathReg = /(?<=\\)[^\\]*/g;

const path = 'V:\\1POLYTECH\\5 SEM\\CPP\\js\\lab3';

let paths = path.match(pathReg);

console.log(paths);