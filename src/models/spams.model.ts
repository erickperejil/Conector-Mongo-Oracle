import mongoose from "mongoose";

export interface Spams  {
    _id?:mongoose.Types.ObjectId;
    id: number
    idCorreo: number;
    idUsuario: number;
    fecha_marcaje: string;
    
}