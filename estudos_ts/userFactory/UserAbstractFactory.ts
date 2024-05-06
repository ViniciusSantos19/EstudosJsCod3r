import { User } from "../userIterface";

export abstract class UserAbstractFactory {
  abstract createNewUser(name: string, secondname: string, id: number): User
}
