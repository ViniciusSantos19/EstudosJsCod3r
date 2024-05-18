const randomPromise = new Promise((resolve, reject) => {
  setTimeout(() => {
    const caraOuCoroa = Math.random() > 0.5

    if (caraOuCoroa) {
      resolve('Olá mundo')
    } else {
      reject('Erro!')
    }

  }, 2000)
})


randomPromise.then((message) => {
  console.log(message)
}).catch(erro => console.log(erro))
