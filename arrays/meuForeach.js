Array.prototype.meuForeach = function(callback) {
  for (let index = 0; index < this.length; index++) {
    callback(this[index], index, this)
  }
}

const arrayParaTeste = ['fato1', 'fato2', 'fato3']

const callBackDeTeste = fato => console.log(fato)

arrayParaTeste.meuForeach(callBackDeTeste)
