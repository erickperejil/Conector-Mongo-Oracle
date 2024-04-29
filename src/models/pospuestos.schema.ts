import mongoose  from "mongoose";
import { Pospuesto} from "./pospuestos.model";
import { baseUsuarioId} from "./usuarios.model";
import { Archivos} from "./correos.model";

const schema = new mongoose.Schema<Pospuesto>({
    id: Number,
    idUsuario: Number,
    idUsuarioDestinatario: Array<baseUsuarioId>,
    asunto: String,
    cuerpo: String,
    fecha_pospuesto: String,
    archivos_adjuntos: Array<Archivos>,
})

export const PospuestoSchema = mongoose.model('pospuestos', schema);