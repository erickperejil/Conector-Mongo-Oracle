"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const pospuestos_controller_1 = require("../controllers/pospuestos.controller");
const router = express_1.default.Router();
router.get('/', pospuestos_controller_1.obtenerPospuestos);
exports.default = router;
