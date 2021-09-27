//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
const arr = ["Terminator", "Terminator 2", "Terminator 3"];
for (const movie of arr) {
  console.log(movie);
}

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
const carEng = ["VW", "Dodge", "KIA"];
const str = carEng.join(", ");
console.log(str);
const againArr = str.split(", ");
console.log(againArr);

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
const names = ["Vasya", "Vika", "Inokentiy"];
const name = names.map((item) => `Hello ${item}`);
console.log(name);

//Преобразовать числовой массив в Boolean
const arr5 = [1, 2, 8];
const arr6 = arr5.includes(8);
console.log(arr6);

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
const arr1 = [1, 6, 7, 8, 3, 4, 5, 6];
const arr2 = arr1.sort((a, b) => b - a);
console.log(arr1);

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
const arr3 = [1, 6, 7, 8, 3, 4, 5, 6];
const arr4 = arr3.filter((value) => value > 3);
console.log(arr4);

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
const arrayHW = [1, 4, 2, 5, 6];
const n = 5;
const arrayF = arrayHW.findIndex((item) => item === n);
console.log(arrayF);
