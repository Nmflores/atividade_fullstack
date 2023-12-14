const banco = require('./banco')
const express = require('express');
const app = express();
const port = 3000;


app.use(express.json())

app.get('/api/musicas', (req,res) =>{
    listaMusicas = banco.selectMusicas((err,listaMusicas) => {
                if(err){
                    console.log(err)
                }else{
                    res.json(listaMusicas);
                }
            
    })
    
})

app.get('/api/musicas/:id', (req,res) => {
    const id = req.params.id;
    musicaEncontrada = banco.selectMusicasId(id,(err,musicaEncontrada)=> {
            if(err){
                console.log(err)
            }else{
                res.json(musicaEncontrada);
            }
    })
    
})

app.post('/api/musicas', (req,res) =>{
    const musica = req.body;
    const nome = musica.nome
    const artista = musica.artista
    banco.insertMusicas(nome,artista,(err,resultado) =>{
            if(err){
                console.log(err)
            }else{
                res.json("Cadastro com sucesso")
            }
    });
    
})

app.put('/api/produtos/:id', (req,res) =>{
    const id = req.params.id;
    const produtoAlterado = req.body;
    const indiceProdutoEncontrado = listaProdutos.findIndex((produto) =>{
        return (produto.id == id);
    })
    if(indiceProdutoEncontrado >= 0){
        listaProdutos[indiceProdutoEncontrado] = produtoAlterado;
        listaProdutos[indiceProdutoEncontrado].id = id;
    }
    res.json(listaProdutos[indiceProdutoEncontrado]);
})

app.delete('/api/produtos/:id', (req,res) =>{
    const id = req.params.id;
    const indiceProdutoEncontrado = listaProdutos.findIndex((produto) =>{
        return (produto.id == id);
    })
    const produtoDeletado = listaProdutos.splice(indiceProdutoEncontrado,1);
    res.json(produtoDeletado);
})

app.listen(port,() => {
    console.log("Servidor iniciado ..");
})