/*Задание 6. Создать меню из пунктов-гиперссылок:
 Определить класс MenuItem.
 Определить свойства: title (название пункта меню или текст
гиперссылки), url (значение атрибута href для гиперссылки), метод show (вывод на экран
созданного меню).
 Добавить 4 пункта меню в виде списка (тег li)*/

class MenuItem {
    constructor(title, url){
        this.title = title;
        this.url = url;
    }
    show(){
        document.write(`<li><a href="${this.url}">${this.title}</a></li>`);
    }
}

let n = prompt("How many menu items?");
for(let i = 0; i<n;i++){
    (new MenuItem(prompt(`#${i+1} title:`),prompt(`#${i+1} url:`))).show();
}
