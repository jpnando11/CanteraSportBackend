import { Router } from 'express';
import { getPayments } from '../controllers/payments.controller';

const paymentrouter = Router();

// Ruta para obtener los pagos
paymentrouter.get('/pagos', getPayments);

export default paymentrouter;
