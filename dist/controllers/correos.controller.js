"use strict";
// import { Request, Response } from "express";
// import { SpamsSchema } from "../models/spams.schema";
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
exports.obtenerCorreos = void 0;
const correos_schema_1 = require("../models/correos.schema");
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const obtenerCorreos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = yield correos_schema_1.CorreoSchema.find();
        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = yield oracledb.getConnection(dbConfig);
                const secuenciaSQL = `INSERT INTO TBL_CORREOS (ID_CORREO, ASUNTO, CUERPO, FECHA_ENVIO, LEIDO, ID_USUARIO_REMITENTE1)
                VALUES (:id_Correo, :asunto, :cuerpo,  TO_DATE(:fecha, 'DD/MM/YYYY'), :leido, :id_usuario_remitente)`;
                let leidos = '1';
                if (modelo.leido) {
                    leidos = '1';
                }
                else {
                    leidos = '0';
                }
                // Objeto consumidor
                const binds = {
                    id_Correo: modelo.idCorreo,
                    asunto: modelo.asunto,
                    cuerpo: modelo.cuerpo,
                    fecha: modelo.fecha_envio,
                    leido: leidos,
                    id_usuario_remitente: modelo.idUsuarioRemitente
                };
                // Opciones para realizar el commit
                const options = {
                    autoCommit: true,
                    outFormat: oracledb.OUT_FORMAT_OBJECT
                };
                // Ejecutar la consulta
                const result = yield connection.execute(secuenciaSQL, binds, options);
                if (result.rowsAffected && result.rowsAffected === 1) {
                    modelo.idUsuarioDestinatario.forEach((usuario) => __awaiter(void 0, void 0, void 0, function* () {
                        const secuenciaSQL = `INSERT INTO TBL_DESTINATARIOS_CORREOS (ID_CORREO, ID_USUARIO_REMITENTE, ID_USUARIO_DESTINO)
                        VALUES (:id_Correo, :id_usuario_remitente, :id_usuario_destino)`;
                        // Objeto consumidor
                        const binds = {
                            id_Correo: modelo.idCorreo,
                            id_usuario_remitente: modelo.idUsuarioRemitente,
                            id_usuario_destino: usuario.idUsuario
                        };
                        // Opciones para realizar el commit
                        const options = {
                            autoCommit: true,
                            outFormat: oracledb.OUT_FORMAT_OBJECT
                        };
                        // Ejecutar la consulta
                        const result = yield connection.execute(secuenciaSQL, binds, options);
                        if (result.rowsAffected && result.rowsAffected === 1) {
                        }
                        else {
                            console.log({ exito: false, mensaje: "No se pudo insertar" });
                        }
                    }));
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
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.obtenerCorreos = obtenerCorreos;
