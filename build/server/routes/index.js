"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.router = void 0;
const express_1 = require("express"); //cria um Middleware para o server para especificar as rotas
const router = (0, express_1.Router)();
exports.router = router;
router.get('/', (_, res) => {
    res.send('ola');
});
router.get('/teste', (req, res) => {
    console.log(req.body);
    res.send('teste');
});
