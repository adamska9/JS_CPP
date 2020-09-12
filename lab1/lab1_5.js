/*LAB 1 exercise 178. Составить программу перевода радианной меры угла в градусы, минуты и
секунды.*/

//a class that converts grad
class Convert {
    constructor(rad) {
        this.rad = rad;
        this.grad = rad * 63.66198;
        this.min = rad * 3437.7467708;
        this.sec = rad * 206264.80625;
    }
    print() {
        console.log(`Rad: ${this.rad} \nGrad: ${this.grad} \nMin: ${this.min} \nSec: ${this.sec}`)
    }
}
(new Convert(1)).print();