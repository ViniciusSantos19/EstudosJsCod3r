class FilaAssincrona {
  constructor(concorrenciaLimite) {
    this.tarefa = []
    this.concorrenciaLimite = concorrenciaLimite
    this.tarefasRodando = 0
  }

  enfileirar(tarefa) {
    this.tarefa.push(tarefa)
    this.runNext()
  }


  runNext() {
    if (this.tarefasRodando < this.concorrenciaLimite && this.tarefa.length) {
      const task = this.tarefa.shift()
      this.tarefasRodando++
      task().then(() => {
        this.runningTasks--;
        this.runNext();
      })
    }
  }
}

const queue = new FilaAssincrona(3)


const createTask = (duracao) => {
  return () => new Promise((resolve, reject) => {
    console.log(`Task started (duracao: ${duracao}ms)`);
    setTimeout(() => {
      console.log(`Task completed (duracao: ${duracao}ms)`);
      resolve();
    }, duracao);
  })

}

for (let i = 1; i <= 10; i++) {
  queue.enfileirar(createTask(i * 1000));
}
