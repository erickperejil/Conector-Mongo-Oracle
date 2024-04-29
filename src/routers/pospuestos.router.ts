import express from 'express';
import { obtenerPospuestos } from '../controllers/pospuestos.controller';


const router = express.Router();

router.get('/',obtenerPospuestos) 
export default router;