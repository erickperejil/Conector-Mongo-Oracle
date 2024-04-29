"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.DestacadoSchema = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const schema = new mongoose_1.default.Schema({
    id: Number,
    idUsuario: Number,
    idCorreo: Number,
    fecha_destacado: String,
});
exports.DestacadoSchema = mongoose_1.default.model('destacados', schema);
