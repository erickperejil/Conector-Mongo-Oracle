"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const borradores_controller_1 = require("../controllers/borradores.controller");
const router = express_1.default.Router();
router.get('/', borradores_controller_1.obtenerBorradores);
exports.default = router;
