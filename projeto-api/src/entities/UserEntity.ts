import { Entity, PrimaryGeneratedColumn, Column, ManyToOne } from "typeorm";
import { EnderecoEntity } from "./Endereco";

@Entity()
export class UserEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  nome: string;

  @Column({ type: "text" })
  email: string;

  @Column({ type: "text" })
  senha: string

  @Column({ type: "text" })
  cpf: string

  @ManyToOne(() => EnderecoEntity, endereco => endereco.usuarios)
  endereco: EnderecoEntity

  constructor() {
    this.id = 0; // Initialize with a default value
    this.nome = ""; // Initialize with a default value
    this.email = ""; // Initialize with a default value
    this.senha = ""
    this.cpf = ""
    this.endereco = new EnderecoEntity()
  }
}
