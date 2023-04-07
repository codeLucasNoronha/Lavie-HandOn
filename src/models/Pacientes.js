import { Sequelize } from "sequelize";
import db from "../db/db.js";

const Pacientes = db.define(
    "Pacientes", 
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    nome: {
        type: Sequelize.STRING,
    },
    email:{
        type: Sequelize.STRING,
    },
    idade: {
       type: Sequelize.DATE,
    },
}, 
{   
    tableName: "pacientes",
});

module.exports = Pacientes;
