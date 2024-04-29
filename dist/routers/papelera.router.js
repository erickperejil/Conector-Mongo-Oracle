"use strict";
var __importDefault = (this && this.__importDefault) || function (mod) {
    return (mod && mod.__esModule) ? mod : { "default": mod };
};
Object.defineProperty(exports, "__esModule", { value: true });
const express_1 = __importDefault(require("express"));
const papelera_controller_1 = require("../controllers/papelera.controller");
const router = express_1.default.Router();
router.get('/', papelera_controller_1.obtenerPapelera);
exports.default = router;
