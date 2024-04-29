import mongoose  from "mongoose";
import { Correo, Archivos } from "./correos.model";
import { baseUsuarioIdCorreo } from "./usuarios.model";

const schema = new mongoose.Schema<Correo>({
    idCorreo: Number,
    idUsuarioRemitente: Number,
    idUsuarioDestinatario: Array<baseUsuarioIdCorreo>,
    asunto: String,
    cuerpo: String,
    fecha_envio: String,
    leido: Boolean,
    archivos_adjuntos: Array<Archivos>,

})

export const CorreoSchema = mongoose.model('correos', schema);