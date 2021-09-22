/*Дана строка 'ahb acb aeb aeeb adcb axeb'. Напишите регулярное выражение, 
которое найдет строки ahb, acb, aeb по шаблону: буква 'a', любой символ, буква 'b'*/
let str = 'ahb acb aeb aeeb adcb axeb';
let regexp = /a.b/g;
let result = str.match(regexp);
console.log(result);

//Дана строка '2+3 223 2223'. Напишите регулярку, которая найдет строку 2+3, не захватив остальные
let str2 = '2+3 223 2223';
let regexp2 = /\d\D\d\s/;
let res = str2.match(regexp2);
console.log(res);

//Получить день, месяц и год текущей даты и по отдельности вывести в консоль
let time = new Date();
console.log(time.getFullYear());
console.log(time.getDate());
console.log(time.getMonth()); //Выведет восьмой месяц, т.к. отсчет начинается с нуля. можно просто добавить +1