import express from 'express';
import { obtenerDestacados } from '../controllers/destacados.controller';



const router = express.Router();

router.get('/',obtenerDestacados) 
export default router;