"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
exports.obtenerPospuestos = void 0;
const pospuestos_schema_1 = require("../models/pospuestos.schema");
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const obtenerPospuestos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = yield pospuestos_schema_1.PospuestoSchema.find();
        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = yield oracledb.getConnection(dbConfig);
                const secuenciaSQL = `INSERT INTO TBL_CORREOS_POSPUESTOS (ID_POSPUESTOS, ID_USUARIO_REMITENTE1, ASUNTO, CUERPO, FECHA_POSPUESTOS)
                VALUES (:id_pospuesto, :id_usuario, :asunto, :cuerpo, TO_DATE(:fecha, 'DD/MM/YYYY'))`;
                // Objeto consumidor
                const binds = {
                    id_pospuesto: modelo.id,
                    id_usuario: modelo.idUsuario,
                    asunto: modelo.asunto,
                    cuerpo: modelo.cuerpo,
                    fecha: modelo.fecha_pospuesto
                };
                // Opciones para realizar el commit
                const options = {
                    autoCommit: true,
                    outFormat: oracledb.OUT_FORMAT_OBJECT
                };
                // Ejecutar la consulta
                const result = yield connection.execute(secuenciaSQL, binds, options);
                if (result.rowsAffected && result.rowsAffected === 1) {
                    yield connection.close();
                }
                else {
                    console.log({ exito: false, mensaje: "No se pudo insertar" });
                }
            }
            catch (error) {
                console.log(error, "No se pudo insertar ");
            }
        }
        ;
        console.log({ exito: true, mensaje: "Correos Pospuestos Insertados correctamente" });
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.obtenerPospuestos = obtenerPospuestos;
