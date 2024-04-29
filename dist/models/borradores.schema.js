"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.BorradorSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idBorrador: Number,
    idUsuario: Number,
    asunto: String,
    cuerpo: String,
    idUsuarioDestinatario: (Array),
    archivos_adjuntos: (Array),
});
exports.BorradorSchema = mongoose_1.default.model('borradores', schema);
