const { createResponder } = require("../utils/responder");
const APIReponder = createResponder('API');
const service = require('../service/service')

module.exports.teste = async (req, res) => {
    try {
        result = service.teste()
        return APIReponder.send(result);
    } catch (e) {
        return e
    }
}