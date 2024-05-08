const inverterAtributos = objeto => {
  const novoObjeto = {};
  for (const chave in objeto) {
    if (Object.hasOwnProperty.call(objeto, chave)) {
      novoObjeto[objeto[chave]] = chave;
    }
  }
  return novoObjeto;
}

const objetoOriginal = { nome: "Vinicius", idade: 30, cidade: "São Paulo" };

console.log(inverterAtributos(objetoOriginal))
