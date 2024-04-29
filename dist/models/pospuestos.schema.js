"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.PospuestoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    idUsuario: Number,
    idUsuarioDestinatario: (Array),
    asunto: String,
    cuerpo: String,
    fecha_pospuesto: String,
    archivos_adjuntos: (Array),
});
exports.PospuestoSchema = mongoose_1.default.model('pospuestos', schema);
