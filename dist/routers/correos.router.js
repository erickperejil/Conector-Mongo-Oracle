"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const correos_controller_1 = require("../controllers/correos.controller");
const router = express_1.default.Router();
router.get('/', correos_controller_1.obtenerCorreos);
exports.default = router;
