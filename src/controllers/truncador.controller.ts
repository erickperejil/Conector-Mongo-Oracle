import {Response, Request} from "express";

const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');



export const Truncate = async (req: Request, res: Response) => {
  try {
    await TruncateSpams();
    await TruncatePapelera();
    await TruncatePospuestos();
    await TruncateDestinatarios();
    await TruncateContactos();
    await TruncateCorreos();
    console.log("Datos truncados con éxito");
    res.send('Correos truncados exitosamente');
    res.end(); // Cierra la petición
  } catch (error) {
    console.error("Error al truncar datos:", error);
    res.status(500).send('Error al truncar datos');
    res.end(); // En caso de error, cierra la petición
  }
};


export const TruncateSpams= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_SPAM`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de SPAMS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};



export const TruncatePapelera= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_PAPELERA`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de PAPELERA', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};


export const TruncateDestinatarios= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_DESTINATARIOS_CORREOS`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de DESTINATARIOS_CORREOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};


export const TruncatePospuestos= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_CORREOS_POSPUESTOS`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CORREOS POSPUESTOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};


export const TruncateCorreos= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_CORREOS`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CORREOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};

export const TruncateContactos= async () => {  
    try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
  
                const secuenciaSQL = `TRUNCATE TABLE TBL_CONTACTOS`;

                const options = {
                outFormat: oracledb.OUT_FORMAT_OBJECT
                };

                const result = await connection.execute(secuenciaSQL, [], options);
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al truncar la tabla de CONTACTOS', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};
