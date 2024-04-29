import express, { Express, Request, Response } from 'express';
import dotenv from 'dotenv';
import cors from 'cors';
import { Database } from './utils/database';

import usuarioRouter from './routers/usuario.router';
import spamsRouter from './routers/spam.router';
import borradoresRouter from './routers/borradores.router';
import correosRouter from './routers/correos.router';
import destacadosRouter from './routers/destacados.router';
import etiquetasRouter from './routers/etiquetas.router';
import papeleraRouter from './routers/papelera.router';
import pospuestosRouter from './routers/pospuestos.router';





dotenv.config();
const database:Database = new Database();
const app: Express = express();
const port = 1000; 

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({extended:true}));

app.use('/usuario',usuarioRouter);
app.use('/spams',spamsRouter);
app.use('/borradores',borradoresRouter);
app.use('/correos',correosRouter);
app.use('/destacados',destacadosRouter);
app.use('/etiquetas',etiquetasRouter);
app.use('/papelera',papeleraRouter);
app.use('/pospuestos',pospuestosRouter);

app.get('/', (req: Request, res: Response) => {
    res.send('Servidor raiz, hola');
    });

app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});