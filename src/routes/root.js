import express, { request, response } from "express";

const routes = express.Router();

routes.get("/health", (request, response) => {
    response.status(200).json({ message: "API Funcionando!" })
});

export default routes;