interface User {
  name: string
  id: number
}

interface Product {
  name: string
  id: number
  user: User
}

class ProductClass {
  name: string
  id: number
  user: User
  constructor(name: string, id: number, user: User) {
    this.name = name
    this.id = id
    this.user = user
  }
}

class UsesrAccount {
  name: string
  id: number
  constructor(name: string, id: number) {
    this.name = name
    this.id = id
  }
}


const user: User = {
  name: "vinicuis",
  id: 1,
}

const deleteUser = (user: User): User => {
  return user
}

const createUserAccount = (nome: string, id: number): User => {
  const newUser: User = new UsesrAccount(nome, id)
  return newUser
}

const createProduct = (nome: string, id: number, user: User): Product => {
  const newProduct: Product = new ProductClass(nome, id, user)
  return newProduct
}


console.log(createUserAccount("Vinicius", 1))

const newUser = createUserAccount("Manoel", 2)
const newProduct = createProduct("Notebook", 1, newUser)

console.log(newProduct)
