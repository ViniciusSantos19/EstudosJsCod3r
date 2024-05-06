import { Mochila } from "./Generics";

export class MochilaString implements Mochila<string> {
  itens: string[] = [];

  get(): string {
    return this.itens.pop()
  }

  add(obj: string): void {
    this.itens.push(obj)
  }

  getItens(): string[] {
    return this.itens
  }
}

const mochilaString: Mochila<string> = new MochilaString()

mochilaString.add("teste")
mochilaString.add("secundo insert na pilha")
console.log(mochilaString.getItens())
console.log(mochilaString.get())
