import { Request, Response } from "express";
import { DestacadoSchema } from "../models/destacados.schema";

export const obtenerDestacados = (req: Request, res: Response) => {
    DestacadoSchema.find()
        .then(resultado => {
            res.send({ status: true, message: "Destacados encontrados", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraron Destacados", error })
        })
}

