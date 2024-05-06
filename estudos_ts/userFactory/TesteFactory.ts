import { User } from "../userIterface";
import { UserAbstractFactory } from "./UserAbstractFactory";
import { UserFactory } from "./UserFactory";
const factory: UserAbstractFactory = new UserFactory()
const user: User = factory.createNewUser("Vinicius", "Rodrigues dos Santos Moreira", 1)
console.log(user)
