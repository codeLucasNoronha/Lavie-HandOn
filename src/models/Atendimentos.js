import { Sequelize } from "sequelize";
import db from "../db/db.js";

const Pacientes = require("./Pacientes");
const Psicologos = require("./Psicologos");

const Atendimentos = db.define(
    "Atendimentos", 
    {
    id: {
        type: Sequelize.INTEGER,
        primaryKey: true,
        autoIncrement: true,
    },
    data_atendimento:{
        type: Sequelize.DATE,
    },
    observacao: {
       type: Sequelize.STRING,
    },
    paciente_id:{
        type: Sequelize.INTEGER,
        references:{
            model: Pacientes,
            key: "id",
        }
    },
    psicologo_id:{
        type: Sequelize.INTEGER,
        references:{
            model: Psicologos,
            key: "id",
        }
    },
}, 
{
    tableName: "atendimentos",
});

module.exports = Atendimentos;