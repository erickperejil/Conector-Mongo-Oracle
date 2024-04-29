import express from 'express';
import { obtenerEtiquetas } from '../controllers/etiquetas.controller';


const router = express.Router();

router.get('/',obtenerEtiquetas) 
export default router;