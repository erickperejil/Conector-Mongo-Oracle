import { Request, Response } from "express";
import { EtiquetaSchema } from "../models/etiquetas.schema";

export const obtenerEtiquetas = (req: Request, res: Response) => {
    EtiquetaSchema.find()
        .then(resultado => {
            res.send({ status: true, message: "Etiquetas encontrados", resultado });
            res.end();
        })
        .catch(error => {
            res.send({ status: false, message: "No se encontraron Etiquetas", error })
        })
}

