import mongoose from "mongoose";
import { Archivos} from "./correos.model";
import { baseUsuarioId } from "./usuarios.model";

export interface Borrador {
    _id?:mongoose.Types.ObjectId;
    idBorrador: number;
    idUsuario: number;
    asunto: string;
    cuerpo: string;
    idUsuarioDestinatario: Array<baseUsuarioId>;
    archivos_adjuntos: Array<Archivos>;
}