import { DataSource } from "typeorm";
import { UserEntity } from "./entities/UserEntity";
import "dotenv/config";
import { EnderecoEntity } from "./entities/Endereco";
require('dotenv').config({ path: "../.env" });

export const dataSource = new DataSource({
  type: "postgres",
  host: process.env.DB_HOST,
  port: Number(process.env.DB_PORT),
  username: process.env.DB_USERNAME,
  password: String(process.env.DB_PASSWORD),
  database: process.env.DB_NAME,
  synchronize: true,
  logging: false,
  entities: [UserEntity, EnderecoEntity], // replace with your actual entities
  migrations: ["./migrations/AddColumnsToUserEntity.ts"],
  subscribers: [],
  migrationsTableName: "tabelaMigration"
});

export const startConnection = async (): Promise<DataSource> =>
  await dataSource.initialize();

export const getDataSource = (): DataSource => dataSource;

