/*LAB 1 exercise 64. Даны две строки. Определите, можно ли из некоторых символов первой
строки и всех символов второй строки составить новую строку, в которой каждый символ
встречается ровно два раза.*/

let str1 = `abcd`, str2 = `abcdkasgfujds`;
//checks if str2 contains all the letters from str1
const foo_check = (str1, str2) => {
    let check = true;
    for(let i = 0 ; i < str1.length; i++){
        if(!str2.includes(str1.charAt(i))){ 
            return check = false;
        }
    } return check;
}
console.log(foo_check(str1,str2));