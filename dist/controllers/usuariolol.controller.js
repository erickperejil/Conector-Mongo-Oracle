"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.subirUsuariosOracle = exports.obtenerUsuario = exports.obtenerUsuarios = void 0;
const usuarios_schema_1 = require("../models/usuarios.schema");
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const obtenerUsuarios = (req, res) => {
    usuarios_schema_1.UsuariosSchema.find()
        .then(resultado => {
        res.send({ status: true, message: "usuarios encontrados", resultado });
        console.log(resultado);
        res.end();
    })
        .catch(error => {
        res.send(error);
        res.end();
    });
};
exports.obtenerUsuarios = obtenerUsuarios;
const obtenerUsuario = (req, res) => {
    usuarios_schema_1.UsuariosSchema.findOne({ id: req.params.id })
        .then(resultado => {
        res.send({ status: true, message: "Usuario encontrado", resultado });
        res.end();
    })
        .catch(error => {
        res.send({ status: false, message: "No se encontraro el usario", error });
        res.end();
    });
};
exports.obtenerUsuario = obtenerUsuario;
const subirUsuariosOracle = (Usuarios) => {
    for (const modelo of Usuarios) {
        try {
            // Hacer la conexión
            const connection = oracledb.getConnection(dbConfig).then(() => {
                const secuenciaSQL = `INSERT INTO TBL_USUARIOS (ID_USUARIO_FINAL, NOMBRE, APELLIDO, CORREO, CONTRASENA, GENERO, NUMERO_TELEFONICO, PAIS)
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
                const result = connection.execute(secuenciaSQL, binds, options).then(() => {
                    if (result.rowsAffected && result.rowsAffected === 1) {
                        console.log({ exito: true, mensaje: "Insertado correctamente" });
                    }
                    else {
                        console.log({ exito: false, mensaje: "No se pudo insertar" });
                    }
                }).catch(() => {
                    console.log('error al hacer la instruccion sql');
                });
            })
                .catch(() => {
                console.log('error al hacer la conexion a oracle');
            });
        }
        catch (error) {
            console.log(error, 'error');
        }
    }
};
exports.subirUsuariosOracle = subirUsuariosOracle;
