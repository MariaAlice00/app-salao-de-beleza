import cors from "cors";
import express from "express";
import router from "./src/presentation/routes/routes";
// importar a conexão com o banco de dados

const app = express()

app.use(express.json())
app.use(router)
app.use(cors())


app.listen(3000, () => {
    console.log('Servidor rodando em http://localhost:3000');
})