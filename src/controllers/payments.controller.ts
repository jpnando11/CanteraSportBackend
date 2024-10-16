import { Request, Response } from 'express';
import {Payment} from '../models/Payment';

// Controlador para obtener los pagos desde la base de datos
export const getPayments = async (req: Request, res: Response) => {
  try {
    // Obtener todos los pagos de la base de datos
    const payments = await Payment.findAll();

    res.json(payments);
  } catch (error) {
    console.error('Error al obtener los pagos:', error);
    res.status(500).json({ message: 'Error al obtener los pagos' });
  }
};
