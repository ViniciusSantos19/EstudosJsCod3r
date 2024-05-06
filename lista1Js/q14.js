const vendaDeFrutas = (fruta) => {
  switch (fruta) {
    case "maçã":
      return "Estamo sem maçãs no momento"
      break;
    case "kiwi":
      return "Não vendemos essa fruta aqui"
      break
    case "melancia":
      return "São três reais o quilo"
      break
    default:
      return "Erro! valor inválido"
      break;
  }
}

console.log(vendaDeFrutas("melancia"))
console.log(vendaDeFrutas("maçã"))
console.log(vendaDeFrutas("kiwi"))
