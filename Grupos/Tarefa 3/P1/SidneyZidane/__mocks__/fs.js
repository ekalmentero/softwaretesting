'use strict';

const fs = jest.createMockFromModule('fs');

function readFileSync(directoryPath) {
    return ("{\"matricula\": 111111, \"nome\": \"arquivo mock\"}");
}
  
fs.readFileSync = readFileSync;

module.exports = fs;