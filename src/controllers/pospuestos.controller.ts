import { PospuestoSchema } from "../models/pospuestos.schema";
import { Request, Response } from "express";

const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');

export const obtenerPospuestos= async (req: Request, res: Response) => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await PospuestoSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);

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
                const result = await connection.execute(secuenciaSQL, binds, options);

                if (result.rowsAffected && result.rowsAffected === 1) {
                    await connection.close();
                } else {
                    console.log({ exito: false, mensaje: "No se pudo insertar" });
                }
            } catch (error) {
                console.log(error,"No se pudo insertar "); 
            }
        };

        console.log({ exito: true, mensaje: "Correos Pospuestos Insertados correctamente" });
        res.send({ message: 'Correos Pospuestos insertados exitosamente'});
        res.end();
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};




