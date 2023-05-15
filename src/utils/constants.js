const QUERY = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 20,
  LIMIT_PER_PAGE: 100,
};

const TRANS_TYPES = {
  BOOKING: 'Đặt phòng',
  TOP_UP: 'Nạp tiền',
};

const SEARCH_FIELD = {
  BY_PROVINCE: 'Tỉnh thành',
  BY_NAME: 'Khách sạn',
};

const DAY_VN = {
  0: 'Chủ nhật',
  1: 'Thứ 2',
  2: 'Thứ 3',
  3: 'Thứ 4',
  4: 'Thứ 5',
  5: 'Thứ 6',
  6: 'Thứ 7',
};

const BACKEND_ADDRESS = 'https://wygo-api.onrender.com';
// const DRIVE_API_ADDRESS = '';
const GOOGLE_AUTH_LINK = 'https://wygo-api.onrender.com/v1/auth/google';

const SORT_TYPE = {
  MOST_FIT: 'Phù hợp nhất',
  MOST_STAR: 'Nhiều sao nhất',
  MOST_CMT: 'Đánh giá nhiều nhất',
  MOTST_CHEAP: 'Giá thấp nhất trước',
  MOST_EXPENSIVE: 'Giá cao nhất trước',
};
const TABS = Object.values(SORT_TYPE);

const TYPES_OF_HOTEL = ['HomeStay', 'Resort', 'Hotel'];
const RANGE_OF_PRICES = [
  { start: 0, end: 500000, operator: '-' },
  { start: 500000, end: 1000000, operator: '-' },
  { start: 1000000, end: 1500000, operator: '-' },
  { start: 1500000, end: 2000000, operator: '-' },
  { start: 2000000, end: undefined, operator: '>' },
];
const LIST_STARS = [5, 4, 3, 2, 1];

const BOOK_STATUS = {
  INCOMMING: 'Sắp tới',
  FINISHED: 'Hoàn tất',
  CANCELED: 'Đã huỷ',
  // INPROGRESS: 'Đang diễn ra',
};

const BOOK_STATUS_LIST = Object.values(BOOK_STATUS);

export {
  QUERY,
  BACKEND_ADDRESS,
  TRANS_TYPES,
  GOOGLE_AUTH_LINK,
  SEARCH_FIELD,
  DAY_VN,
  SORT_TYPE,
  TABS,
  TYPES_OF_HOTEL,
  RANGE_OF_PRICES,
  LIST_STARS,
  BOOK_STATUS,
  BOOK_STATUS_LIST,
};
