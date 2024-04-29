// import { Request, Response } from "express";
// import { SpamsSchema } from "../models/spams.schema";

import { SpamsSchema } from "../models/spams.schema";

// export const obtenerSpams = (req: Request, res: Response) => {
//     SpamsSchema.find()
//         .then(resultado => {
//             res.send({ status: true, message: "spams encontrados", resultado });
//             res.end();
//         })
//         .catch(error => {
//             res.send({ status: false, message: "No se encontraron spams", error })
//         })
// }






const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');

export const obtenerSpams= async () => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await SpamsSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);

        
                const secuenciaSQL = `INSERT INTO TBL_SPAM (ID_CORREO, ID_SPAM, ID_USUARIO1)
                VALUES (:id_Correo, :id_Spam, :id_Usuario)`;

               // Objeto consumidor
                const binds = {
                id_Correo: modelo.idCorreo,
                id_Spam: modelo.id,
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
        console.log({ exito: true, mensaje: "Correos Spams Insertados correctamente" });
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};



