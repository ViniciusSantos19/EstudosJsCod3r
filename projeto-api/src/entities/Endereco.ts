import { text } from "express";
import { Column, Entity, OneToMany, PrimaryGeneratedColumn } from "typeorm";
import { UserEntity } from "./UserEntity";

@Entity()
export class EnderecoEntity {
  @PrimaryGeneratedColumn()
  id: number;

  @Column({ type: "text" })
  rua: string;

  @Column({ type: "integer" })
  numero: number;

  @Column({ type: "text" })
  complemento: string;

  @Column({ type: "text" })
  bairro: string;

  @Column({ type: "text" })
  cidade: string;

  @Column({ type: "text" })
  cep: string;

  @OneToMany(() => UserEntity, usuario => usuario.endereco)
  usuarios: UserEntity[]

  constructor() {
    this.id = 0
    this.cep = ""
    this.rua = ""
    this.cidade = ""
    this.numero = 0
    this.bairro = ""
    this.complemento = ""
  }

}
