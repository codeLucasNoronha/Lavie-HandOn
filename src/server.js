import express from 'express';
import routes from "./routes/root.js"
import db from "./db/db.js";

const app = express();

app.use(express.json());
app.use(routes);

try {
    await db.sync({ alter: true });
    console.log("A conexão com o banco deu certo!")

    app.listen(3333, () => {
        console.log("servidor iniciado na porta 3333")
    });

} catch (error) {
    console.log("A conexão com o banco nao deu certo!", error);
    process.exit(1);
}


