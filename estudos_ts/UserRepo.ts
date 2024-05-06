import { UserAccount } from "./userIterface";

const createUser = (name: string, secondname: string, id: number): UserAccount => {
  const newUserAccount = new UserAccount(name, secondname, id)
  return newUserAccount
}

const user = createUser("Vinícius", "Rodrigues dos Santos Moreira", 1)

console.log(user)
