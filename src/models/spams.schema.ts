import mongoose  from "mongoose";
import { Spams } from "./spams.model";

const schema = new mongoose.Schema<Spams>({
    id: Number,
    idCorreo: Number,
    idUsuario: Number,
    fecha_marcaje: String,
})

export const SpamsSchema = mongoose.model('spams', schema);