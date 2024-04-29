import mongoose  from "mongoose";
import { Destacados } from "./destacados.model";


const schema = new mongoose.Schema<Destacados>({
    id: Number,
    idUsuario: Number,
    idCorreo: Number,
    fecha_destacado: String,
})

export const DestacadoSchema = mongoose.model('destacados', schema);