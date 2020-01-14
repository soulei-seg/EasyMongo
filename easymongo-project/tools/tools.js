const fs = require('fs');
const csvtojson = require("csvtojson");
var filename = ""
var result

module.exports = {

getFilesNames: async(path) => {

    fs.readdir(path, (err, files) => {
        filename = files[0]
        console.log(files[0])
    })
    return await filename
},

ImportData: async(filename) => {
    var lastFour = filename.substr(filename.length - 4)
    var lastThree = filename.substr(filename.length - 3)
    if(lastFour == "yaml" || lastThree == "yml"){
        //lire le fichier
        //comprendre le contenu
        //envoyer à la base de donnée
    }else if(lastThree == "csv"){

    }else if(lastThree == "yml"){
        
    }else if(lastThree == "json"){
        
    }
    //envoyé 
    return await result
}

}