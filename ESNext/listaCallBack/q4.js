const peloMenosDois = (array, callback) => {
  return array.filter(callback).length >= 2
}


const ehPar = num => num % 2 === 1;

const array = [1, 2, 3, 4, 5]

console.log(peloMenosDois(array, ehPar))
