/*Задание 3. Создать класс объектов (Tour) для работы туристической фирмы с
методом подсчета стоимости поездки из расчета: количества человек * количество
дней * тариф страны. Создать экземпляр объекта turkeyTour со значениями свойств.
Вывести все свойства объекта на экран. Метод объекта расчет создавать на основе
функции.*/

class Tour{
    constructor(country, people, days, fee){
      this.country = country;
      this.people = people;
      this.days = days;
      this.fee = fee;
    }
    price() {
      return `Total price: ${this.people*this.days*this.fee}`;
    }
}
const turkeyTour = new Tour('Turkey', 3, 3, 69);

console.log(turkeyTour.price());