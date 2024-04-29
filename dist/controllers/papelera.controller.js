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
exports.obtenerPapelera = void 0;
const papelera_schema_1 = require("../models/papelera.schema");
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const obtenerPapelera = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = yield papelera_schema_1.PapeleraSchema.find();
        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = yield oracledb.getConnection(dbConfig);
                const secuenciaSQL = `INSERT INTO TBL_PAPELERA (ID_PAPELERA, ID_CORREO, FECHA_ELIMINACION, ID_USUARIO_1)
                VALUES (:id_papelera, :id_correo, TO_DATE(:fecha, 'DD/MM/YYYY'),  :id_Usuario)`;
                // Objeto consumidor
                const binds = {
                    id_papelera: modelo.id,
                    id_correo: modelo.idMensaje,
                    fecha: modelo.fecha_eliminacion,
                    id_Usuario: modelo.idUsuario,
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
                console.log(error);
            }
        }
        ;
        console.log({ exito: true, mensaje: "Papelera Insertada correctamente" });
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.obtenerPapelera = obtenerPapelera;
