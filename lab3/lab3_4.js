/*Задание 4. Дополните код программы для выполнения задания: К встроенному
классу String добавить метод printMe(), который выводит слово «Ура!» как заголовок
(тег h…), указанного пользователем уровня (prompt).
Уровень заголовка (1, 2 … 6) можно добавить в виде свойства класса String.
Вспомним, как должны выглядеть теги заголовков в HTML.*/

String.prototype.niveau = prompt("Header size:");
String.prototype.printMe = () => `ura`;
let para = document.createElement(`h${String.prototype.niveau}`);
  para.innerText = String.prototype.printMe();
  document.body.appendChild(para);