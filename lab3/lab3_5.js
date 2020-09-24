/*Задание 5. Создать объект-коллекцию Сотрудник, который содержит сведения о
сотруднике некоторой фирмы, такие как Имя, Отдел, Телефон, Зарплата и отображает
данные об этом сотруднике (создать метод объекта для отображения данных)*/

let Coleague = {
    name : 's',
    facility : '4',
    phone : '337695',
    salary : '400000',
    output : function () {
        console.log(`Employee ${this.name}\n` +
            `Facility ${this.facility}\nPhone - ${this.phone}\nSalary - ${this.salary}`);
    }
  }
let newName = `Jason Mongoose`;
Coleague.name = newName;

Coleague.output();
  