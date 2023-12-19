const banco = require('../banco');
const express = require('express');
const router = express.Router()

router.get('/api/soundtracks', (req,res) =>{
     banco.selectSoundtrack((err,listaSoundtrack) => {
                if(err){
                    console.log(err)
                }else{
                    res.json(listaSoundtrack);
                }
            
    })

})


module.exports = router;