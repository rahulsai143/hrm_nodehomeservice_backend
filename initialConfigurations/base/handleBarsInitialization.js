const handleBars = require('handlebars');

let handleBarsInstance;

const initializeHandleBars = async () => handleBars;

const createHandleBars = async () => handleBarsInstance || (handleBarsInstance = await initializeHandleBars());

module.exports = { createHandleBars };