import { Request, Response } from "express";
import { BorradorSchema } from "../models/borradores.schema";

export const obtenerBorradores = (req: Request, res: Response) => {
    BorradorSchema.find()
        .then(resultado => {
            res.send({ status: true, message: "Borradores encontrados", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraron Borradores", error })
        })
}

