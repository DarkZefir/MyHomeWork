//Создать объект car, добавить к нему свойство color со значением 'черный'
//Изменить свойство color объекта car на 'зеленый'
//В объект car добавить свойство power, которое является функцией и выводит в консоль мощность двигателя
const car = {
  color: "Черный",
};
car.color = "Зеленый";
car.power = function (car) {
  let EnginePower = 66;
  if (+EnginePower) {
    console.log(`Мощность двигателя : ${EnginePower}`);
  } else {
    console.log("Мощность измеряется в цифрах, попробуйте еще");
  }
};
car.power();

/* На склад принимают груши и яблоки, напишите функцию, 
которая возвращает результат сложения количества принятых груш и яблок*/
const pear = 6;
const apples = 8;
const Warehouse = {
  pear: pear,
  apples: apples,
};
function sum(Warehouse) {
  return +[pear] + +[apples];
}
const result = sum(Warehouse);
console.log(result);
