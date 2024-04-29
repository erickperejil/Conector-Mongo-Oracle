import { PapeleraSchema } from "../models/papelera.schema";





const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');

export const obtenerPapelera= async () => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await PapeleraSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);

        
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
                const result = await connection.execute(secuenciaSQL, binds, options);
        
                if (result.rowsAffected && result.rowsAffected === 1) {
                    await connection.close();
                } else {
                    console.log({ exito: false, mensaje: "No se pudo insertar" });
                }
            } catch (error) {
                console.log(error); 
            }
        };
        console.log({ exito: true, mensaje: "Papelera Insertada correctamente" });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};



