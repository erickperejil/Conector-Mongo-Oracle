"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.Database = void 0;
const mongoose_1 = __importDefault(require("mongoose"));
const usuario_controller_1 = require("../controllers/usuario.controller");
const correos_controller_1 = require("../controllers/correos.controller");
const papelera_controller_1 = require("../controllers/papelera.controller");
const pospuestos_controller_1 = require("../controllers/pospuestos.controller");
const spam_controller_1 = require("../controllers/spam.controller");
class Database {
    constructor() {
        this.conectar();
    }
    conectar() {
        mongoose_1.default.connect('mongodb+srv://erickperejil:a88w2qhnIcEQ1zsj@cluster0.anjnu36.mongodb.net/Gmail')
            .then(respuesta => {
            console.log("Conectado a base de datos Gmail");
            (0, usuario_controller_1.obtenerUsuarios)().then(() => {
                console.log({ exito: true, mensaje: "Usuarios Insertados correctamente" });
                (0, correos_controller_1.obtenerCorreos)().then(() => {
                    console.log({ exito: true, mensaje: "Correos Insertados correctamente" });
                    (0, papelera_controller_1.obtenerPapelera)();
                    (0, pospuestos_controller_1.obtenerPospuestos)();
                    (0, spam_controller_1.obtenerSpams)();
                });
            });
        })
            .catch(respuesta => {
            console.log("Error al conectarse a la base de datos Gmail");
        });
    }
}
exports.Database = Database;
