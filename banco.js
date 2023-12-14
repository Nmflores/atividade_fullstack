let mysql = require('mysql');

 let conexao = {
  host: "localhost",
  user: "root",
  password: "12345",
  database: "atividade"
};

function selectMusicas(callback){
   // con.connect(function(err) {
    let con = mysql.createConnection(conexao);
    con.connect();
        //if (err) throw err;
        //console.log("Connected!");
        
        
        con.query("SELECT * FROM musica", function (err, result, fields) {
                if (err) callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            }
            )
            con.end()
        //}
}

function insertMusicas(nome,artista,callback){
    let con = mysql.createConnection(conexao);
    con.connect();

    let sql = `INSERT INTO musica(nome,artista) VALUES("${nome}","${artista}")`
        
    con.query(sql, function (err, result, fields) {
                if (err)  callback(err,undefined)
                else{
                    callback(undefined,result)
                }

            }
        )
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

    }
    )
            con.end()
}


      




module.exports = {selectMusicas,insertMusicas,selectMusicasId}


