/* В терминале оплаты сохранено ваше имя, напишите функцию для определения 
имени в терминале(если вы ввели ваше имя, то привет + имя, если нет, то нет такого имени)*/
function getAccess() {
  let currenUserName = prompt("Ваше имя, сэр","");
  return (currenUserName == "Артем")? ("Привет" + " " + currenUserName) : 'Нет такого имени';
  };
console.log(getAccess());

//Напишите функцию вычисления типа аргумента и вывод типа в консоль
let func = (a) => typeof (a);
console.log(func(3)) //Number

//Напишите функцию, которая определяет является ли число простым или нет
function defNumb(n) {
  for(x = 2; x < n; x++) {
  if(n % x == 0)
  return "Не является простым"; 
  } return "Является простым";
  };
console.log(defNumb(77));