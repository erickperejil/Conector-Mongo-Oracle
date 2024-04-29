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
exports.obtenerContactos = exports.obtenerUsuarios = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
var modelosController = {};
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const obtenerUsuarios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = yield usuarios_schema_1.UsuariosSchema.find();
        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = yield oracledb.getConnection(dbConfig);
                const secuenciaSQL = `INSERT INTO TBL_USUARIOS (ID_USUARIO, NOMBRE, APELLIDO, CORREO, CONTRASENA, GENERO, NUMERO_TELEFONICO, PAIS)
                VALUES (:id, :nombre, :apellido, :correo, :contrasena, :genero, :numero_telefonico, :pais)`;
                // Objeto consumidor
                const binds = {
                    id: modelo.id,
                    nombre: modelo.nombre,
                    apellido: modelo.apellido,
                    correo: modelo.correo,
                    contrasena: modelo.contrasena,
                    genero: modelo.genero,
                    numero_telefonico: modelo.numero_telefonico,
                    pais: modelo.pais
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
        (0, exports.obtenerContactos)();
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerContactos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = yield usuarios_schema_1.UsuariosSchema.find();
        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = yield oracledb.getConnection(dbConfig);
                modelo.contactos.forEach((usuario) => __awaiter(void 0, void 0, void 0, function* () {
                    const secuenciaSQL = `INSERT INTO TBL_CONTACTOS (ID_USUARIOS1, ID_USUARIOS2)
                    VALUES (:id_usuario1, :id_usuario2)`;
                    // Objeto consumidor
                    const binds = {
                        id_usuario1: modelo.id,
                        id_usuario2: usuario.idContacto,
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
                        console.log({ exito: false, mensaje: "No se pudo insertar contacto" });
                    }
                }));
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
exports.obtenerContactos = obtenerContactos;
