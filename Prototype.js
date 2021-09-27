//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
class Animal {
  constructor(move) {
    this.move = move;
  }
}
const cat = new Animal("Jump");
console.log(cat.move);
