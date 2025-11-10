const webAuth = require('@simplewebauthn/server'),
    logger = require('../../../../initialConfigurations/globalInstances/logger/logger');

const register = async(req, webAuthRequestDTO) =>{
    let webAuthDTO;
    try {
        webAuthRequestDTO.username = req.userDTO?.username;
                 
    } catch (exception) {

    }
}

const read = async (req, webAuthRequestDTO) => {

}