/*Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, 
которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'*/
const str = "ahb acb aeb aeeb adcb axeb";
const regexp = /a.b/g;
const result = str.match(regexp);
console.log(result);

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
const str2 = "2+3 223 2223";
const regexp2 = /2\+3/;
const res = str2.match(regexp2);
console.log(res);

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
const time = new Date();
console.log(time.getFullYear());
console.log(time.getDate());
console.log(time.getMonth() + 1); //Выведет восьмой месяц, т.к. отсчет начинается с нуля. можно просто добавить +1
