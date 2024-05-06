const compraDeCarro = (modeloDesejado) => {
  switch (modeloDesejado) {
    case "hatch":
      console.log("Compra efetuada com sucesso!");
      break;
    case "sedan":
    case "motocicleta":
    case "caminhonete":
      console.log(`Tem certeza que não prefere este modelo?`);
      break;
    default:
      console.error(`Não trabalhamos com este tipo de automóvel aqui.`);
  }
}

console.log(compraDeCarro("hatch"))
