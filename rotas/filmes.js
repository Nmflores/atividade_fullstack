const banco = require('../banco');
const express = require('express');
const router = express.Router()

router.get('/api/filmes', (req,res) =>{
     banco.selectFilmes((err,listafilmes) => {
                if(err){
                    console.log(err)
                }else{
                    res.json(listafilmes);
                }
            
    })

})

router.get('/api/filmes/:id', (req,res) => {
    const id = req.params.id;
    banco.selectFilmesId(id,(err,musicaEncontrada)=> {
            if(err){
                console.log(err)
            }else{
                res.json(musicaEncontrada);
            }
    })
    
})

router.post('/api/filmes', (req,res) =>{
    const filme = req.body;
    const nome = filme.nome
    const diretor = filme.diretor
    banco.insertFilmes(nome,diretor,(err,resultado) =>{
            if(err){
                console.log(err)
            }else{
                res.json("Cadastro com sucesso")
            }
    });
    
})

router.put('/api/filmes/:id', (req,res) =>{
    const id = req.params.id;
    const atualiza = req.body;
    const nome = atualiza.nome
    const artista = atualiza.diretor
    banco.updateFilmes(id,nome,diretor,(err,campoAtualizado) =>{
                if(err){
                    console.log(err)
                }else{
                    res.json("Campos Atualizado")
                }
    })
    
})

router.delete('/api/filmes/:id', (req,res) =>{
    const id = req.params.id;
    banco.deleteFilmes(id,(err,deletado) =>{
                if(err){
                    console.log(err)
                }else{
                    res.json("Linha deletada")
                   
                }
    })
})



module.exports = router;