//Создать объект car, добавить к нему свойство color со значением 'черный'
//Изменить свойство color объекта car на 'зеленый'
//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
let car = {
    color : "Черный",
    };
    car.color = 'Зеленый';
car.power = function(car){
    let EnginePower = prompt("Мощность двигателя","");
    if (+EnginePower){
    console.log("Мощность двигателя" + ":" + EnginePower);
    } else {
    alert("Мощность измеряется в цифрах, попробуйте еще");
    }
    }
car.power();

/* На склад принимают груши и яблоки, напишите функцию, 
которая возвращает результат сложения количества принятых груш и яблок*/
let pear = prompt("Какое количество груш мы имеем?","");
let apples = prompt("А сколько яблок у нас на складе?","");
let Warehouse = {
    pear : pear, 
    apples : apples, 
    };
function sum(Warehouse){
    return (+[pear] + +[apples]);
    };
let result = sum(Warehouse);
console.log(result);