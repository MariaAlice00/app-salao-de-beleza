import { Router, Response, Request } from "express";
import { clientController } from "../controllers/clientController";
// TODO: importar a conexão com o banco de dados
// TODO: importar o controller específico para essa rota

const router = Router()

router.get('/clientes', clientController.getClients())
router.post('/clientes', clientController.addClient())

export default router