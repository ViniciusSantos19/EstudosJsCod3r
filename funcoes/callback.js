let array = [2, 5, 4, 1.2, 5.7, 7, 9, 9, 10];

// sem callback

let array2 = [];

for (let i in array) {
  if (array[i] > 5) {
    array2.push(array[i]);
  }
}

console.log(array2);

//com callback

let array3 = array.filter(function (nota) {
  return nota <= 5;
});

console.log(array3);

// com arrow function

let array4 = array.filter((nota) => nota < 5);
console.log(array4);
