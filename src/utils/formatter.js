const numFormatter = new Intl.NumberFormat('vi-VN', {
  currency: 'VND',
  style: 'currency',
});

const dtFormat = new Intl.DateTimeFormat('vi-VN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
});

module.exports = {
  numFormatter,
  dtFormat,
};
