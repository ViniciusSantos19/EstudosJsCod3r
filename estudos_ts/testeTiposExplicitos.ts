const greet = (nome: string, data: Date) => {
  console.log(`Olá ${nome}, a data de hoje é ${data.toString()}`)
}

greet("Vinicius", new Date())
