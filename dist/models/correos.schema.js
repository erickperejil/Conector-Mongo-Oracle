"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.CorreoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idCorreo: Number,
    idUsuarioRemitente: Number,
    idUsuarioDestinatario: (Array),
    asunto: String,
    cuerpo: String,
    fecha_envio: String,
    leido: Boolean,
    archivos_adjuntos: (Array),
});
exports.CorreoSchema = mongoose_1.default.model('correos', schema);
