"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerDestacados = void 0;
const destacados_schema_1 = require("../models/destacados.schema");
const obtenerDestacados = (req, res) => {
    destacados_schema_1.DestacadoSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Destacados encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron Destacados", error });
    });
};
exports.obtenerDestacados = obtenerDestacados;
