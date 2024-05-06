function testeQueue(tempo) {
  const futuro = Date.now() + tempo
  while (Date.now() < futuro) { }
}

setTimeout(() => console.log('Exec #01'), 3000)
setTimeout(() => console.log('Exec #02'), 300)

testeQueue(5000)
console.log('Fim!')


