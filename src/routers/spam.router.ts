import express from 'express';
import { obtenerSpams } from '../controllers/spam.controller';


const router = express.Router();
router.get('/',obtenerSpams) 
export default router;