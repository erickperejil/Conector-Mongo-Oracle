import mongoose  from "mongoose";
import { Papelera } from "./papelera.model";

const schema = new mongoose.Schema<Papelera>({
    id: Number,
    idMensaje: Number,
    idUsuario: Number,
    fecha_eliminacion: String,
})

export const PapeleraSchema = mongoose.model('papeleras', schema);