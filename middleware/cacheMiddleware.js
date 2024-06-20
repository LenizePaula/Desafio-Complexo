const express = require('express');
const cacheController = require('../controllers/cacheController');

async function cacheMiddleware(req, res, next) {
    const chave = req.originalUrl;
    const dadosCache = cacheController.getFromCache(chave);

    if (dadosCache) {
        console.log("Dados recuperados do cache para a URL:", chave);
        res.json(dadosCache);
    } else {
        console.log("Dados não encontrados no cache para a URL:", chave);
        next();
    }
}

module.exports = cacheMiddleware;



