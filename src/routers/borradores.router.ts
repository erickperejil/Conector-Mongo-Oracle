import express from 'express';
import { obtenerBorradores} from '../controllers/borradores.controller';


const router = express.Router();

router.get('/',obtenerBorradores) 
export default router;