"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.EtiquetaSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    idEtiqueta: Number,
    idUsuario: Number,
    nombre: String,
    correos: (Array),
});
exports.EtiquetaSchema = mongoose_1.default.model('etiquetas', schema);
