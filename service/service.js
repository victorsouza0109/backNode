
const axios = require("axios");
const { v4: uuid } = require('uuid');
const PATH = require('path');
const { response } = require("express");
module.exports.teste = async () => {
    try {
        return 'Teste'
    } catch (e) {
        return e
    }
}