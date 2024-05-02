import { Request, Response } from "express";
// import { SpamsSchema } from "../models/spams.schema";

import { CorreoSchema } from "../models/correos.schema";
import { SpamsSchema } from "../models/spams.schema";




const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');

export const obtenerCorreos = async (req: Request, res: Response) => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await CorreoSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);
                const secuenciaSQL = `INSERT INTO TBL_CORREOS (ID_CORREO, ASUNTO, CUERPO, FECHA_ENVIO, LEIDO, ID_USUARIO_REMITENTE1)
                VALUES (:id_Correo, :asunto, :cuerpo,  TO_DATE(:fecha, 'DD/MM/YYYY'), :leido, :id_usuario_remitente)`;

                let leidos = '1';
                if (modelo.leido) {
                    leidos = '1';
                } else {
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
                const result = await connection.execute(secuenciaSQL, binds, options);

                if (result.rowsAffected && result.rowsAffected === 1) {
                    modelo.idUsuarioDestinatario.forEach(async usuario => {
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
                        const result = await connection.execute(secuenciaSQL, binds, options);

                        if (result.rowsAffected && result.rowsAffected === 1) {
                        } else {
                            console.log({ exito: false, mensaje: "No se pudo insertar" });
                        }
                    });
                    await connection.close();
                } else {
                    console.log({ exito: false, mensaje: "No se pudo insertar" });
                }
            } catch (error) {
                console.log(error);
            }
        };

        console.log({ exito: true, mensaje: "Correos insertados exitosamente" });
        res.send({ message: 'Correos extraidos exitosamente' });
        res.end();
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};

