"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerEtiquetas = void 0;
const etiquetas_schema_1 = require("../models/etiquetas.schema");
const obtenerEtiquetas = (req, res) => {
    etiquetas_schema_1.EtiquetaSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "Etiquetas encontrados", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraron Etiquetas", error });
    });
};
exports.obtenerEtiquetas = obtenerEtiquetas;
