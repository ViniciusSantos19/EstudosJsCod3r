const estaEntre =(numero, minimo, maximo, inclusivo = false) => {
    if (inclusivo) {
        return numero >= minimo && numero <= maximo;
    } 
        return numero > minimo && numero < maximo;
    
}
console.log((estaEntre(5, 2, 10)))
console.log(estaEntre(10, 50, 100))
