"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const destacados_controller_1 = require("../controllers/destacados.controller");
const router = express_1.default.Router();
router.get('/', destacados_controller_1.obtenerDestacados);
exports.default = router;
