const puppeteer = require('puppeteer');

let pdfGeneratorInstance;

const initializePdfGenerator = async () => await puppeteer.launch();

const createPdfGenerator = async () => pdfGeneratorInstance || (pdfGeneratorInstance = await initializePdfGenerator());

module.exports = { createPdfGenerator };