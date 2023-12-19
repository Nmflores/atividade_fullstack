const banco = require('../banco');
const express = require('express');
const router = express.Router()

router.get('/api/musicas', (req,res) =>{
     banco.selectMusicas((err,listaMusicas) => {
                if(err){
                    console.log(err)
                }else{
                    res.json(listaMusicas);
                }
            
    })

})

router.get('/api/musicas/:id', (req,res) => {
    const id = req.params.id;
    banco.selectMusicasId(id,(err,musicaEncontrada)=> {
            if(err){
                console.log(err)
            }else{
                res.json(musicaEncontrada);
            }
    })
    
})

router.post('/api/musicas', (req,res) =>{
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

router.put('/api/musicas/:id', (req,res) =>{
    const id = req.params.id;
    const atualiza = req.body;
    const nome = atualiza.nome
    const artista = atualiza.artista
    banco.updateMusicas(id,nome,artista,(err,campoAtualizado) =>{
                if(err){
                    console.log(err)
                }else{
                    res.json("Campos Atualizado")
                }
    })
    
})

router.delete('/api/musicas/:id', (req,res) =>{
    const id = req.params.id;
    banco.deleteMusicas(id,(err,deletado) =>{
                if(err){
                    console.log(err)
                }else{
                    res.json("Linha deletada")
                   
                }
    })
})



module.exports = router;