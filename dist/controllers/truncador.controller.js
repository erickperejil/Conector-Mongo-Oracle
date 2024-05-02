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
exports.TruncateContactos = exports.TruncateCorreos = exports.TruncatePospuestos = exports.TruncateDestinatarios = exports.TruncatePapelera = exports.TruncateSpams = exports.Truncate = void 0;
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');
const Truncate = (req, res) => __awaiter(void 0, void 0, void 0, function* () {
    try {
        yield (0, exports.TruncateSpams)();
        yield (0, exports.TruncatePapelera)();
        yield (0, exports.TruncatePospuestos)();
        yield (0, exports.TruncateDestinatarios)();
        yield (0, exports.TruncateContactos)();
        yield (0, exports.TruncateCorreos)();
        console.log("Datos truncados con éxito");
        res.send('Correos truncados exitosamente');
        res.end(); // Cierra la petición
    }
    catch (error) {
        console.error("Error al truncar datos:", error);
        res.status(500).send('Error al truncar datos');
        res.end(); // En caso de error, cierra la petición
    }
});
exports.Truncate = Truncate;
const TruncateSpams = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_SPAM`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de SPAMS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncateSpams = TruncateSpams;
const TruncatePapelera = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_PAPELERA`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de PAPELERA', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncatePapelera = TruncatePapelera;
const TruncateDestinatarios = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_DESTINATARIOS_CORREOS`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de DESTINATARIOS_CORREOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncateDestinatarios = TruncateDestinatarios;
const TruncatePospuestos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_CORREOS_POSPUESTOS`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CORREOS POSPUESTOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncatePospuestos = TruncatePospuestos;
const TruncateCorreos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_CORREOS`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CORREOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncateCorreos = TruncateCorreos;
const TruncateContactos = () => __awaiter(void 0, void 0, void 0, function* () {
    try {
        // Hacer la conexión
        const connection = yield oracledb.getConnection(dbConfig);
        const secuenciaSQL = `TRUNCATE TABLE TBL_CONTACTOS`;
        const options = {
            outFormat: oracledb.OUT_FORMAT_OBJECT
        };
        const result = yield connection.execute(secuenciaSQL, [], options);
    }
    catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CONTACTOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
});
exports.TruncateContactos = TruncateContactos;
