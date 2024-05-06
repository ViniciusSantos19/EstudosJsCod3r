interface Animal {
  nome: string
}

interface Urso extends Animal {
  peso: number
}

var urso: Urso = {
  peso: 200.00,
  nome: "Urso pardo"
}

console.log(urso)
