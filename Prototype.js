//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
class animal {
  constructor(move) {
    this.move = move;
  }
}
const cat = new animal("Jump");
console.log(cat.move);
