import { UserEntity } from "../entities/UserEntity";
import { UserDto } from "../models/User";
import { UserRepository, userRepository } from "../repositories/UserRepository";
import bcrypt from "bcrypt"


export class UserService {
  public constructor(private repository: UserRepository) { }


  public async createUser(user: UserEntity): Promise<UserEntity> {
    const saltRounds = 10;
    // Criptografe a senha antes de salvar o usuário
    user.senha = await bcrypt.hash(user.senha, saltRounds);
    return this.repository.save(user);
  }

  private mapToDto(user: UserEntity) {
    return new UserDto(user.nome, user.email)
  }

  public async getAllUser(): Promise<UserDto[]> {
    const users = await this.repository.findAll()
    return users.map(user => this.mapToDto(user))
  }

  public async getUserByEmail(email: string): Promise<UserEntity | null> {
    return this.repository.findByEmail(email)
  }
}
export const userService = new UserService(userRepository)
