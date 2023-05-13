const numFormatter = new Intl.NumberFormat('vi-VN', {
  currency: 'VND',
  style: 'currency',
});

const dtFormat = new Intl.DateTimeFormat('vi-VN', {
  day: 'numeric',
  month: 'long',
  year: 'numeric',
  weekday: 'long',
});

const hotelLocationFormat = location => {
  return `${location?.others ? `${location.others}, ` : ''}
  ${location?.district ? `${location.district}, ` : ''}
  ${location.nation + ' - ' + location.province}`;
};

const getVnDateFormat = date => {
  const spilts = dtFormat.format(new Date(date)).replaceAll(',', '').split(' ');
  // ['Thứ', 'Bảy', '13', 'tháng', '5', '2023']

  return {
    weekDay: `${spilts[0]} ${spilts[1]}`,
    day: spilts[2],
    month: spilts[4],
    monthWithPrefix: `${spilts[3]} ${spilts[4]}`,
    year: spilts[5],
    withoutWeekDay: spilts.slice(2).join(' '),
  };
};

module.exports = {
  numFormatter,
  dtFormat,
  hotelLocationFormat,
  getVnDateFormat,
};
