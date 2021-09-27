/* В терминале оплаты сохранено ваше имя, напишите функцию для определения 
имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)*/
function getAccess(name) {
  return name === "Артем" ? `Привет ${name}` : "Нет такого имени";
}
console.log(getAccess("Артем"));

//Напишите функцию вычисления типа аргумента и вывод типа в консоль
const getTypeOfArgument = (arg) => console.log(typeof arg);
//Number

//Напишите функцию, которая определяет является ли число простым или нет
function definesNumber(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 0) return "Не является простым";
  }
  return "Является простым";
}
console.log(definesNumber(77));
