const fs = require('fs');
const csvtojson = require("csvtojson");
var filename = ""

module.exports = {

getFilesNames: async(path) => {

    fs.readdir(path, (err, files) => {
        filename = files[0]
        console.log(files[0])
    })
    return await filename
},

SendCSV: () => {

}

}