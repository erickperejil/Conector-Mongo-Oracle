import mongoose  from "mongoose";
import { Etiqueta } from "./etiquetas.model";
import { baseCorreoId } from "./correos.model";

const schema = new mongoose.Schema<Etiqueta>({
    idEtiqueta: Number,
    idUsuario: Number,
    nombre: String,
    correos: Array<baseCorreoId>,
})

export const EtiquetaSchema = mongoose.model('etiquetas', schema);