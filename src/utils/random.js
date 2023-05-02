/**
 * Get random in range
 *
 * @param {Number} lo lower bound
 * @param {Number} hi upper bound
 * @param {Number}} round how many numbers after floating point. Ex:n = 3.1415. round = 1 => return 3.1, round = 2 => return 3.14, round = 3 => return 3.142)
 * @returns {Number}
 */
const getRan = (lo = 8, hi = 10, round = 1) =>
  lo + Math.round(Math.random() * (hi - lo) * Math.pow(10, round)) / Math.pow(10, round);

/**
 *
 * @param {Number} lo lower bound
 * @param {Number} range range
 * @returns {Number}
 */
const getDiscount = (lo = 50, range = 20) => lo + Math.round(Math.random() * range);

/**
 *
 * @param {Number} point point
 * @returns {String}
 */
const getReview = point => {
  const reviews = ['Trên cả tuyệt vời', 'Tuyệt vời', 'Rất tốt', 'Tốt', 'Điểm nhận xét'];
  if (point >= 9) return reviews[0];
  if (point >= 8.5) return reviews[1];
  if (point >= 8) return reviews[2];
  if (point >= 7.5) return reviews[3];
  return reviews[4];
};

module.exports = {
  getRan,
  getDiscount,
  getReview,
};
