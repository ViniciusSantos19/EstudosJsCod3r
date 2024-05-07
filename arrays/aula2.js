const pilotos = ['senna', 'massa', 'barriquelo', 'vettel', 'verstapen']
pilotos.pop
console.log(pilotos)

pilotos.push('hamilton')
console.log(pilotos)

const pilotosComLetraMaiuscula = pilotos.map((item) => {
return  item.substring(0, 1).toUpperCase() + item.substring(1)
})

console.log(pilotosComLetraMaiuscula)

pilotos.shift()

console.log(pilotos)

pilotos.unshift('gerald')

console.log(pilotos)

pilotos.splice(0,1, 'botas', 'carlo')

console.log(pilotos)

pilotos.splice(1,2)

console.log(pilotos)

const partePilotosMaiusculos =  pilotosComLetraMaiuscula.slice(1, 2)
console.log(partePilotosMaiusculos)
