/* В терминале оплаты сохранено ваше имя, напишите функцию для определения 
имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)*/
function getAccess(Name) {
  return Name === "Артем" ? `Привет ${Name}` : "Нет такого имени";
}
console.log(getAccess("Артем"));

//Напишите функцию вычисления типа аргумента и вывод типа в консоль
const getTypeOfArgument = (a) => typeof a;
{
  console.log(getTypeOfArgument(3));
}
//Number

//Напишите функцию, которая определяет является ли число простым или нет
function definesNumber(n) {
  for (let x = 2; x < n; x++) {
    if (n % x === 0) return "Не является простым";
  }
  return "Является простым";
}
console.log(definesNumber(77));
