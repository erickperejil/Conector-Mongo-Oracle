import express from 'express';
import {obtenerUsuarios } from '../controllers/usuario.controller';


const router = express.Router();



//Obtener todos los usuairos
router.get('/',obtenerUsuarios) //Chque


// (collection usuarios) get usuario actual


// router.put('/:id/Usuario',agregarCarrito)

export default router;