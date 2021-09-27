//Создать 2 объекта: animal и cat, объект animal добавить свойство move, объект cat должен наследовать свойство move
class Animal {
  constructor(options) {
    this.move = options.move;
  }
}

class Cat extends Animal {
  constructor(options) {
    super(options);
    this.move = options.move;
  }
}
const cat = new Cat({
  move: "Jump",
});
console.log(cat);
