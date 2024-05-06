import { User, UserAccount } from "../userIterface";
import { UserAbstractFactory } from "./UserAbstractFactory";

export class UserFactory extends UserAbstractFactory {
  public createNewUser(name: string, secondname: string, id: number): User {
    const newUser = new UserAccount(name, secondname, id)
    return newUser
  }

}
