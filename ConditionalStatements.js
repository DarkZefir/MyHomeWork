/*Выполнить сложение различных типов(string+boolean, string+number, number+boolean)
Выполнить умножение различных типов(string * boolean, string * number, number * boolean)
Выполнить деление различных типов(string/boolean, string/number, number/Boolean)
Выполнить явное преобразование(number, string, boolean)*/
 
let x = "soft" + true;
console.log(x); // softtrue

let a = "5" + 4;
console.log(a); // 54;

let b = 5 + true;
console.log(b); // 6 true - 1 , false - 0

let c = "3" * true;
console.log(c); // 3

let d = "2" * 2;
console.log(d); // 4

let e = 2 * false;
console.log(e); // 0

let f = "6" / false;
console.log(f); // infinity Деление на ноль

let g = "4dr" / 2;
console.log(g); // NaN

let h = 8 / true;
console.log(h); // 8

console.log(Boolean(2)); // true
console.log(Boolean("text")); //true
console.log(Number(false)); //0
console.log(Number("4")); //4
console.log(String(false)); //"false"
console.log(String(3)); //"3"