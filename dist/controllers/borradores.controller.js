"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerBorradores = void 0;
const borradores_schema_1 = require("../models/borradores.schema");
const obtenerBorradores = (req, res) => {
    borradores_schema_1.BorradorSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Borradores encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron Borradores", error });
    });
};
exports.obtenerBorradores = obtenerBorradores;
