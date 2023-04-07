import { Sequelize } from "sequelize";
import sequelize from "../db/db.js";
import db from "../db/db.js";

const Psicologos = db.define(
  "Psicologos",
  {
    id: {
      type: Sequelize.INTEGER,
      primaryKey: true,
      autoIncrement: true,
    },
    nome: {
      type: Sequelize.STRING,
    },
    email: {
      type: Sequelize.STRING,
    },
    senha: {
      type: Sequelize.STRING,
    },
    apresentacao: {
      type: Sequelize.STRING,
    },
  },
  {
    tableName: "psicologos",
  });

module.exports = Psicologos;
