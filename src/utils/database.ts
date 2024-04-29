import mongoose from "mongoose";
import { obtenerUsuarios } from "../controllers/usuario.controller";
import { obtenerCorreos } from "../controllers/correos.controller";
import { obtenerPapelera } from "../controllers/papelera.controller";
import { obtenerPospuestos } from "../controllers/pospuestos.controller";
import { obtenerSpams } from "../controllers/spam.controller";

export class Database {
    constructor(){
        this.conectar();
    }
    conectar(){
        mongoose.connect('mongodb+srv://erickperejil:a88w2qhnIcEQ1zsj@cluster0.anjnu36.mongodb.net/Gmail')
        .then(respuesta=>{
            console.log("Conectado a base de datos Gmail");
            obtenerUsuarios().then(()=>{
                console.log({ exito: true, mensaje: "Usuarios Insertados correctamente" });
                obtenerCorreos().then(()=>{
                    console.log({ exito: true, mensaje: "Correos Insertados correctamente" });
                    obtenerPapelera();
                    obtenerPospuestos();
                    obtenerSpams();
                })
            })
        })
        .catch(respuesta=>{
            console.log("Error al conectarse a la base de datos Gmail");
        })
    }
}

