//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
let move = +prompt("animal move","")
let animal = {
    move, 
    }
let cat={
    __proto__:animal
    }
console.log(cat.move)