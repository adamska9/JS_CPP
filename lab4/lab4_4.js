/*4:Проверьте, что строка, введенная пользователем, является десятичной
дробью или целым числом. Выведите сначала целую, затем дробную части. Учтите, что
разделителем может быть как запятая, так и точка.*/

const numberReg = /(^([1-9]+[.,]?\d+?$|0?[.,]\d+?$))|^\d$/g;

const number = prompt("Please enter a number:");


const checkNumber = (number) => {
    let result = '';
    //check validity of number
    if (number.length < 0 && number === undefined) return console.log('Enter a valid number')
    if (!numberReg.test(number)) return console.log('Enter a valid number')
    //checks if number is decimal or integer
    if (/[.,]/.test(number)){
        result = (number.match(numberReg))[0].split(/[,.]/);
        let [integer, decimal] = [result[0], result[1]];
        return console.log(`Your number: ${number}\nInteger part: ${integer}, decimal part: ${decimal}`);
    }
    else 
        console.log(`Your number: ${number}`);
}

checkNumber(number);

