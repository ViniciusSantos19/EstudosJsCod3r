import { Request, Response } from "express";
import { UserEntity } from "../entities/UserEntity";
import { UserService, userService } from "../services/UserServices";
import bcrypt from "bcrypt"


export class UserController {
  public constructor(private userService: UserService) { }
  // Método para criar um usuário
  async createUser(req: Request, res: Response): Promise<void> {
    try {
      const user: UserEntity = req.body;
      const savedUser = await this.userService.createUser(user);
      res.status(201).json(savedUser);
    } catch (error: unknown) {
      const erroMessage = "algum errro desconhecido"
      if (error instanceof Error) {
        console.log("o erro foi aqui no create users")
        res.status(500).json({ message: error.message });
      } else {
        res.status(500).json({ message: erroMessage });
      }

    }
  }

  // Método para obter todos os usuários
  async getAllUser(req: Request, res: Response): Promise<void> {
    try {
      const users = await this.userService.getAllUser();
      res.status(200).json(users);
    } catch (error: unknown) {
      const erroMessage = "algum errro desconhecido"
      if (error instanceof Error) {
        console.log("o erro foi aqui no get all users")
        res.status(500).json({ message: error.message });

      } else {
        res.status(500).json({ message: erroMessage });
      }
    }
  }

  public async loginUser(req: Request, res: Response): Promise<void> {
    const { email, senha } = req.body;

    const user: UserEntity | null = await this.userService.getUserByEmail(email)

    if (user) {
      const match = await bcrypt.compare(senha, user.senha);
      if (match) {
        res.status(200).send("Usuário autenticado com sucesso!");
      } else {
        // As senhas não correspondem, retornar um erro
        res.status(401).send("Senha incorreta!");
      }
    } else {
      // Usuário não encontrado, retornar um erro
      res.status(404).send("Usuário não encontrado!");
    }
  }
}
export const userController = new UserController(userService)
