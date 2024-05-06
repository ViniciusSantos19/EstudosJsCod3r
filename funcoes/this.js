function compararComThis(parametro) {
  console.log(this === parametro);
}
const obj = {};
compararComThis = compararComThis.bind(obj);
compararComThis(global);
compararComThis(obj)

let compararComThisArrow = (param) => console.log(this === param);

compararComThisArrow(global);
compararComThisArrow(module.exports);
