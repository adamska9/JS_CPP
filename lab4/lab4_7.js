/*7: Найдите в тексте слова, состоящие из 15 и более символов. Замените
такие слова в тексте на слова вида «абстр…ние».*/

let str = 'Die Hochschule für Technik und Wirtschaft Berlin (HTW Berlin) ist mit fast 14.000 Studierenden und über 500 Beschäftigten'
+ 'die größte staatliche Fachhochschule Berlins und Ostdeutschlands.'
+ 'Es existieren etwa 70 Studienangebote in den Bereichen Technik, Informatik, Wirtschaft, Kultur und Gestaltung.';

str = str.replace(/\w{15,}/gm, 'АБСТРАГИРОВАНИЕ');
console.log(str);