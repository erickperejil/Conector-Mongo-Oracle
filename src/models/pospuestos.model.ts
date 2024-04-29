import mongoose from "mongoose";
import { baseUsuarioId } from "./usuarios.model";
import { Archivos } from "./correos.model";

export interface Pospuesto  {
    _id?:mongoose.Types.ObjectId;
    id: number;
    idUsuario: number;
    idUsuarioDestinatario: Array<baseUsuarioId>;
    asunto: string;
    cuerpo: string;
    fecha_pospuesto: string;
    archivos_adjuntos: Array<Archivos>;
    
}