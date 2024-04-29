"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.UsuariosSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    nombre: String,
    apellido: String,
    correo: String,
    numero_telefonico: String,
    contrasena: String,
    genero: String,
    pais: String,
    contactos: (Array),
    correosEnviados: (Array),
    correosPospuestos: (Array),
    correosSpam: (Array),
    borradores: (Array),
});
exports.UsuariosSchema = mongoose_1.default.model('Usuario', schema);
