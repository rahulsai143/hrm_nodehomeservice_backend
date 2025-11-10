const crypto = require('crypto');

const generateExecutionContext = async () => {
  const transactionMask = (await configurationRepository.findByCode('transactionMask'))?.value ?? "yyyyMMddhhmmssXXXXXXXX";
  const now = new Date();

  return transactionMask.replace(/yyyy|yy|MM|dd|hh|mm|ss|X+/g, (match) => {
    if (match === "yyyy") return String(now.getFullYear());
    if (match === "yy") return String(now.getFullYear()).slice(-2);
    if (match === "MM") return String(now.getMonth() + 1).padStart(2, '0');
    if (match === "dd") return String(now.getDate()).padStart(2, '0');
    if (match === "hh") return String(now.getHours()).padStart(2, '0');
    if (match === "mm") return String(now.getMinutes()).padStart(2, '0');
    if (match === "ss") return String(now.getSeconds()).padStart(2, '0');
    if (match.startsWith("X")) return crypto.randomBytes(match.length / 2).toString('hex');
  });
};

module.exports = {generateExecutionContext};
