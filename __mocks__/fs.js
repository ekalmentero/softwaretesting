
const fs = jest.createMockFromModule('fs');

function readdirSync(path){
    return ["meuArq1","meuArq2","meuAer3"];
    
}

fs.readdirSync = readdirSync;

module.exports = fs;