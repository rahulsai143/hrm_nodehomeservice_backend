const path = require('path'),
  configurationRepository = require('../framework/infra/configurations/schema/repository/configurationRepository');

const fetchPdfGenerator = async () => {
  const config = await configurationRepository.findByCode('pdfGeneratorFile');
  return require(path.join(__dirname, config?.value ? config.value : path.join('base', 'pdfGeneratorInitialization.js')));
};

module.exports = {fetchPdfGenerator};