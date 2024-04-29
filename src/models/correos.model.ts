import mongoose from "mongoose";
import { baseUsuarioIdCorreo } from "./usuarios.model";



export interface Archivos{
    nombre: string;
    tipo: string;
    tamaño: number;

}

export interface baseCorreoId{
    idCorreo: number;
}

export interface Correo extends baseCorreoId{
    _id?:mongoose.Types.ObjectId;
    idUsuarioRemitente: number;
    idUsuarioDestinatario: Array<baseUsuarioIdCorreo>;
    asunto: string;
    cuerpo: string;
    fecha_envio: string;
    leido: boolean;
    archivos_adjuntos: Array<Archivos>;
}