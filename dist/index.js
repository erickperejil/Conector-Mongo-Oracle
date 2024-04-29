"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const dotenv_1 = __importDefault(require("dotenv"));
const cors_1 = __importDefault(require("cors"));
const database_1 = require("./utils/database");
const usuario_router_1 = __importDefault(require("./routers/usuario.router"));
const spam_router_1 = __importDefault(require("./routers/spam.router"));
const borradores_router_1 = __importDefault(require("./routers/borradores.router"));
const correos_router_1 = __importDefault(require("./routers/correos.router"));
const destacados_router_1 = __importDefault(require("./routers/destacados.router"));
const etiquetas_router_1 = __importDefault(require("./routers/etiquetas.router"));
const papelera_router_1 = __importDefault(require("./routers/papelera.router"));
const pospuestos_router_1 = __importDefault(require("./routers/pospuestos.router"));
dotenv_1.default.config();
const database = new database_1.Database();
const app = (0, express_1.default)();
const port = 1000;
app.use((0, cors_1.default)());
app.use(express_1.default.json());
app.use(express_1.default.urlencoded({ extended: true }));
app.use('/usuario', usuario_router_1.default);
app.use('/spams', spam_router_1.default);
app.use('/borradores', borradores_router_1.default);
app.use('/correos', correos_router_1.default);
app.use('/destacados', destacados_router_1.default);
app.use('/etiquetas', etiquetas_router_1.default);
app.use('/papelera', papelera_router_1.default);
app.use('/pospuestos', pospuestos_router_1.default);
app.get('/', (req, res) => {
    res.send('Servidor raiz, hola');
});
app.listen(port, () => {
    console.log(`Servidor corriendo en el puerto: ${port}`);
});
