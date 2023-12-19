let mysql = require('mysql');

 let conexao = {
  host: "localhost",
  user: "root",
  password: "",
  database: "atividade"
};

//--Musicas
function selectMusicas(callback){
    let con = mysql.createConnection(conexao);
    con.connect();

        con.query("SELECT * FROM musica", function (err, result, fields) {
                if (err) callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })

            con.end()  
}

function insertMusicas(nome,artista,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    let sql = `INSERT INTO musica(nome_musicas,artista) VALUES("${nome}","${artista}")`
        
    con.query(sql, function (err, result, fields) {
                if (err)  callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })
        
            con.end()
}

function selectMusicasId(id,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query("SELECT * FROM musica where id_musica ="+ id, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}

function updateMusicas(id,nome,artista,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query(`UPDATE musica set nome_musicas = "${nome}",artista = "${artista}" where id_musica = ${id}`, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}
function deleteMusicas(id,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query(`DELETE FROM musica where id_musica = ${id}`, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}
//--Filmes


function selectFilmes(callback){
    let con = mysql.createConnection(conexao);
    con.connect();

        con.query("SELECT * FROM filmes", function (err, result, fields) {
                if (err) callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })

            con.end()  
}

function insertFilmes(nome,diretor,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    let sql = `INSERT INTO filmes(nome_filmes,diretor) VALUES("${nome}","${diretor}")`
        
    con.query(sql, function (err, result, fields) {
                if (err)  callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })
        
            con.end()
}

function selectFilmesId(id,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query("SELECT * FROM filmes where id_filmes ="+ id, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}
  
function updateFilmes(id,nome,diretor,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query(`UPDATE filmes set nome_filmes = "${nome}",diretor = "${diretor}" where id_filmes = ${id}`, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}

function deleteFilmes(id,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    con.query(`DELETE FROM filmes where id_filmes = ${id}`, function (err, result, fields) {
            if (err) callback(err,undefined)
            else{
                callback(undefined,result)
                
              
            }

        })
    
            con.end()
}
//--Soundtracks
function selectSoundtrack(callback){
    let con = mysql.createConnection(conexao);
    con.connect();

        con.query("select f.nome_filmes,f.diretor,m.nome_musicas,m.artista from soundtracks as s inner join filmes as f  inner join  musica as m where f.id_filmes = s.id_filmes and m.id_musica = s.id_musica ", function (err, result, fields) {
                if (err) callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            })

            con.end()  
}


module.exports = 
{
    selectMusicas,
    insertMusicas,
    selectMusicasId,
    updateMusicas,
    deleteMusicas,
    selectFilmes,
    insertFilmes,
    selectFilmesId,
    updateFilmes,
    deleteFilmes,
    selectSoundtrack
}


