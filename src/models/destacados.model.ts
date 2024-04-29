import mongoose from "mongoose";

export interface Destacados {
    _id?:mongoose.Types.ObjectId;
    id: number;
    idUsuario: number;
    idCorreo: number;
    fecha_destacado: string;

}