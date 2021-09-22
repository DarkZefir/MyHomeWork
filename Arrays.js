//Дан массив состоящий из названий фильмов, выполните перебор массива с выводом в консоль названия каждого фильма
let arr = ["Terminator", "Terminator 2", "Terminator 3"];
    for(let movie of arr) {
    console.log(movie);
    };

//Дан массив производителей автомобилей, преобразовать массив в строку и обратно в массив
let carEng = ["VW", "Dodge", "KIA"];
let str = carEng.join(", ");
console.log(str);
let againArr = str.split(", ");
console.log(againArr);

//Дан массив имен ваших знакомых, добавить к каждому элементу массива слова hello
let names = ["Vasya", "Vika", "Inokentiy"];
let name = names.map((item, index) => (index = true)? (item = "Hello " + item): NaN );
console.log(name);

//Преобразовать числовой массив в Boolean
let arr5 = [1, 2, 8];
let arr6 = arr5.includes(8);
console.log(arr6);

//Отсортировать массив [1,6,7,8,3,4,5,6] по убыванию
let arr1 = [1,6,7,8,3,4,5,6];
let arr2 = arr1.sort( (a,b) => b - a);
console.log(arr1);

//Отфильтровать массив [1,6,7,8,3,4,5,6] по значению >3
let arr3 = [1,6,7,8,3,4,5,6];
let arr4 = arr3.filter( (value) => value > 3)
console.log(arr4);

//Написать функцию, которая принимает два параметра - массив и число и выводит индекс элемента массива равный числу
let arrayHW = [1, 4, 2, 5, 6];
let n = 5;
let arrayF = arrayHW.findIndex( (item) => item == n);
console.log(arrayF); 