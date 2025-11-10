const handlebars = require("./handlebars");

const queryParametersReplace = async (query, { parameters }) => handlebars.handleBarsInstance.compile(query)(parameters);

module.exports = {queryParametersReplace};