import { Sequelize } from "sequelize";

const dbName = process.env.POSTGRES_DB || "";
const dbUser = process.env.POSTGRES_USER || "";
const dbPassword = process.env.POSTGRES_PASSWORD || "";
const dbHost = process.env.DB_HOST || "";
const dbPort = process.env.DB_PORT || "";

export const database = new Sequelize(dbName, dbUser, dbPassword, {
  pool: {
    max: 1,
    min: 0,
  },
  define: {
    freezeTableName: true,
  },
  dialect: "postgres",
  host: dbHost,
  port: parseInt(dbPort, 10),
  ssl: true,
});
