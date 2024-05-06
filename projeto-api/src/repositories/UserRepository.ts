import { Repository } from "typeorm";
import { UserEntity } from "../entities/UserEntity";
import { getDataSource } from "../typeorm";

export class UserRepository {
  public constructor(private readonly repository: Repository<UserEntity>) { }

  public async save(model: UserEntity): Promise<UserEntity> {
    return await this.repository.save(model);
  }

  public async findAll(): Promise<UserEntity[]> {
    return await this.repository.find();
  }

  public async findByName(nome: string): Promise<UserEntity | null> {
    return await this.repository.findOne({ where: { nome } });
  }

  public async findByEmail(email: string): Promise<UserEntity | null> {
    return await this.repository.findOne({ where: { email } })
  }

}

export const userRepository = new UserRepository(
  getDataSource().getRepository(UserEntity),
);
