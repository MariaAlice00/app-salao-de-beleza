// Arquivo principal de rotas
// Aqui será distribuido o caminho para as demais rotas
import { Router } from 'express';
import clientRoutes from './clientRoutes'
import inventoryRoutes from './inventoryRoutes'
import scheduleRoutes from './scheduleRoutes'
import serviceRoutes from './serviceRoutes'
// As demais rotas deverão ser importadas aqui

const router = Router();

// Rotas
router.use('/clientes', clientRoutes)
router.use('/servicos', serviceRoutes)
router.use('/estoque', inventoryRoutes)
router.use('/horarios', scheduleRoutes)

export default router;