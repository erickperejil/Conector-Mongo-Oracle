import mongoose from "mongoose";
import { baseCorreoId } from "./correos.model";

export interface Etiqueta {
    _id?:mongoose.Types.ObjectId;
    idEtiqueta: number;
    idUsuario: number;
    nombre: string;
    correos: Array<baseCorreoId>;

}