const valor = "global";

function fora() {
  const valor = "local";
  function dentro() {
    return valor;
  }
  return dentro();
}

console.log(fora())
console.log("Testando o lsp no helix")
