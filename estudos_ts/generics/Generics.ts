export interface Mochila<Type> {
  itens: Type[]
  add: (obj: Type) => void
  get(): Type
  getItens(): Type[]
}


