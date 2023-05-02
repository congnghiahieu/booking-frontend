/**
 *
 * @param {string} str string
 * @returns {string} new string after remove unnecessary white spaces
 */
const rmWs = str => str.replace(/\s+/g, ' ').trim();

/**
 *
 * @param {string} str Vietnamese string with accents like (á, ạ, â, ơ, ớ, đ, Đ,...)
 * @returns {string} string after remove all Vietnamese accents
 */
const removeVnAccents = str => {
  return str
    .normalize('NFD')
    .replace(/[\u0300-\u036f]/g, '')
    .replace(/đ/g, 'd')
    .replace(/Đ/g, 'D');
};

/**
 *
 * @param {string} str string to be removed all VN accents and lower case
 * @returns {string} new string in lowercase and no VN accents
 */
const normalizeStr = str => {
  return removeVnAccents(str).toLowerCase().trim();
};

module.exports = {
  rmWs,
  removeVnAccents,
  normalizeStr,
};
