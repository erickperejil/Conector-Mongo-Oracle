import mongoose from "mongoose";
import { baseCorreoId } from "./correos.model";

export interface baseUsuarioId{
    id: number;

}

export interface baseUsuarioIdCorreo{
    idUsuario: number;

}

export interface baseUsuarioIdContacto{
    idContacto: number;

}

export interface baseUsuarioI2 extends baseUsuarioId{
    nombre: string;
    apellido: string;
    correo: string;
    numero_telefonico: string;

}

export interface baseUsuario extends baseUsuarioIdContacto{
    nombre: string;
    apellido: string;
    correo: string;
    numero_telefonico: string;
}


export interface Usuarios extends baseUsuarioI2 {
    _id?:mongoose.Types.ObjectId;
    contrasena: string;
    genero: string;
    pais: string;
    contactos: Array<baseUsuario>;
    correosEnviados: Array<baseCorreoId>;
    correosPospuestos: Array<baseCorreoId>;
    correosSpam: Array<baseCorreoId>;
    borradores: Array<baseCorreoId>;
}