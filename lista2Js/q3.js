const retornaMesEmString = numero => {
  switch (numero) {
    case 1: return 'Janeiro'
      break;
    case 2:
      return 'Fevereiro'
      break
    case 3:
      return 'Marco'
      break
    case 4:
      return 'Abril'
      break
    case 5:
      return 'Maio'
      break
    case 6:
      return 'Junho'
      break
    case 7:
      return 'Julho'
      break
    case 8:
      return 'Agosto'
      break
    case 9:
      return 'Setembro'
      break
    case 10:
      return 'Outrobro'
      break
    case 11:
      return 'Novembro'
      break
    case 12:
      return 'Dezembro'
      break
    default:
      return 'Erro'
      break;
  }
}
console.log(retornaMesEmString(10))
console.log(retornaMesEmString(2))
