import { UsuariosSchema } from "../models/usuarios.schema";
import { Request, Response } from "express";

var modelosController = {};
const oracledb = require('oracledb');
const dbConfig = require('../utils/databaseOracle');

export const obtenerUsuarios= async (req: Request, res: Response) => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await UsuariosSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                const connection = await oracledb.getConnection(dbConfig);

        
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
        obtenerContactos();
        console.log({ exito: true, mensaje: "Usuarios extraidos correctamente" });
        res.send({ message: 'Usuarios extraidos exitosamente'});
        res.end();
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }
};


export const obtenerContactos =async() => {
    try {
        // Utilizar el método find() para obtener todos los documentos del modelo
        const modelosArray = await UsuariosSchema.find();

        // Iterar sobre cada modelo y realizar la inserción
        for (const modelo of modelosArray) {
            try {
                // Hacer la conexión
                    const connection = await oracledb.getConnection(dbConfig);

                    modelo.contactos.forEach(async usuario => {
                            
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
                    const result = await connection.execute(secuenciaSQL, binds, options);
            
                    if (result.rowsAffected && result.rowsAffected === 1) {
                        
                    } else {
                        console.log({ exito: false, mensaje: "No se pudo insertar contacto" });
                    }
                }) ;
            } catch (error) {
                console.log(error); 
            }
        }
    } catch (error) {
        // Manejar cualquier error que ocurra durante la consulta a la base de datos
        console.error('Error al obtener todos los modelos:', error);
        throw error; // Lanzar el error para que quien llame a esta función pueda manejarlo
    }


};


