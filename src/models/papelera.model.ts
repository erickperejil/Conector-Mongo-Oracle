import mongoose from "mongoose";

export interface Papelera  {
    _id?:mongoose.Types.ObjectId;
    id: number;
    idMensaje: number;
    idUsuario: number;
    fecha_eliminacion: string;    
}