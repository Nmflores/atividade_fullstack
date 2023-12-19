const express = require('express');
const musicasRouter = require('./rotas/musicas');
const filmesRouter = require('./rotas/filmes');
const soundtrackRouter = require('./rotas/soundtracks')
const app = express();
const port = 3000;

app.use(express.json())

app.use(musicasRouter);

app.use(filmesRouter);

app.use(soundtrackRouter);

app.listen(port,() => {
    console.log("Servidor iniciado ..");
})