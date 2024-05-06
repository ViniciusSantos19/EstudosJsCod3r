const diasDaSemana = (dia) => {
  switch (dia) {
    case "segunda":
      return "Dia útil"
      break;
    case "terça":
      return "Dia útil"
      break;
    case "quarta":
      return "Dia útil"
      break;
    case "quinta":
      return "Dia útil"
      break;
    case "sexta":
      return "Dia útil"
      break;
    case "sábado":
      return "Fim de semana"
      break
    case "domingo":
      return "Fim de semana"
      break;
    default:
      return "Valor inválido"
      break;
  }
}

console.log(diasDaSemana("quarta"))
