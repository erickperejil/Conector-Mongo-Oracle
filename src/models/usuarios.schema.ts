import mongoose  from "mongoose";
import { baseCorreoId } from "./correos.model";
import { Usuarios, baseUsuario, baseUsuarioIdContacto } from "./usuarios.model";

const schema = new mongoose.Schema<Usuarios>({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    numero_telefonico: String,
    contrasena: String, 
    genero: String,
    pais: String,
    contactos: Array<baseUsuario>,
    correosEnviados: Array<baseCorreoId>,
    correosPospuestos: Array<baseCorreoId>,
    correosSpam: Array<baseCorreoId>,
    borradores: Array<baseCorreoId>,

})

export const UsuariosSchema = mongoose.model('Usuario', schema);