//Реализовать цикл, который будет выводить число а, пока оно не станет меньше 10
for (let a = 20; ; a--) {
  if (a < 10) break;
  console.log(a);
}

//Реализовать цикл, который выводит в консоль простые числа
const n = 7;
next: for (let b = 2; b < n; b++) {
  for (let x = 2; x < b; x++) {
    if (b % x === 0) {
      continue next;
    }
  }
  console.log(b);
}

//Реализовать цикл, который выводит в консоль нечетные числа
const z = 4;
for (let v = 0; v < z; v++) {
  if (v % 2) {
    console.log(v);
  }
}
