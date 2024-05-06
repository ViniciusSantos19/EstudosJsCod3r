function Carro(velocidadeMaxima = 70, delta = 5) {
  let velocidade = 0;

  this.acelerar = () => {
    if (velocidade + delta > velocidadeMaxima) {
      return;
    }
    velocidade += delta;
  };

  this.getVelocidade = () => {
    return velocidade;
  };
}

let carro = new Carro();

carro.acelerar();
carro.acelerar();

console.log(carro.getVelocidade());
