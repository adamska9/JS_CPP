/*Задание 1. Создать объект Сотрудник, который содержит сведения о сотрудниках
некоторой фирмы, такие как Имя, Отдел, Телефон, Зарплата(использовать функцию-
конструктор и ключевое слово this). Создать экземпляр объекта
Задание 2. Для задания 1 через созданный экземляр объекта Сотрудник добавьте
новое свойство адрес к классу объектов*/

class Employee {
    constructor(name, facility, phone, salary) {
        this.name = name;
        this.facility = facility;
        this.phone = phone;
        this.salary = salary;
      }
}

const employee = new Employee(`Jason`,`Bank`,`+10101`,1900);
employee.adress = 'B street 69';

console.log(employee)
