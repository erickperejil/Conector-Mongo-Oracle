import express from 'express';
import { obtenerCorreos } from '../controllers/correos.controller';
import { Truncate } from '../controllers/truncador.controller';



const router = express.Router();

router.get('/',obtenerCorreos);
router.get('/truncar',Truncate) 
export default router;


