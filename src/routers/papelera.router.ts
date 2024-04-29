import express from 'express';
import { obtenerPapelera } from '../controllers/papelera.controller';

const router = express.Router();

router.get('/',obtenerPapelera) 
export default router;