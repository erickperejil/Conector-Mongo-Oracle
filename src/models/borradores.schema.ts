import mongoose  from "mongoose";
import { Borrador } from "./borradores.model";
import { baseUsuarioId } from "./usuarios.model";
import { Archivos } from "./correos.model";


const schema = new mongoose.Schema<Borrador>({
    idBorrador: Number,
    idUsuario: Number,
    asunto: String,
    cuerpo: String,
    idUsuarioDestinatario: Array<baseUsuarioId>,
    archivos_adjuntos: Array<Archivos>,
})

export const BorradorSchema = mongoose.model('borradores', schema);