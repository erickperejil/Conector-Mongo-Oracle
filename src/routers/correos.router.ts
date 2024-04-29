import express from 'express';
import { obtenerCorreos } from '../controllers/correos.controller';



const router = express.Router();

router.get('/',obtenerCorreos) 
export default router;