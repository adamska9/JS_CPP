/*8: С помощью регулярных выражений удалите в тексте суффиксы -ик-:
домик - дом, столик - стол, ключик - ключ
При этом «ик» не должен удалиться в таких словах как «икра», «абрикос» и т.п.*/
let str = 'домик столик ключик икра абрикос';
str_fin = str.replace(/ик(?=\s)/gm, '');
console.log(`text:\n${str}\nchanged text:\n${str_fin}`);
