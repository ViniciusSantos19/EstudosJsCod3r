import { MigrationInterface, QueryRunner, TableColumn } from "typeorm";

export class addColumnsToUserEntity implements MigrationInterface {

  public async up(queryRunner: QueryRunner): Promise<void> {
    await queryRunner.addColumns("UserEntity", [
      new TableColumn({
        name: "cpf",
        type: "text"
      })
      ,
      new TableColumn({
        name: "endereco",
        type: "integer"
      }),
    ])
  }

  public async down(queryRunner: QueryRunner): Promise<any> {
    await queryRunner.dropColumn("UserEntity", "cpf");
    await queryRunner.dropColumn("UserEntity", "endereco");
  }

} 
