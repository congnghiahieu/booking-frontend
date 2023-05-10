const QUERY = {
  DEFAULT_PAGE: 1,
  DEFAULT_PER_PAGE: 20,
  LIMIT_PER_PAGE: 100,
};

const BOOK_STATUS = {
  CANCELED: 'Đã huỷ',
  FINISHED: 'Hoàn tất',
  INPROCESS: 'Đang diễn ra',
  ONOGING: 'Sắp tới',
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

const BACKEND_ADDRESS = 'http://localhost:8000';
const DRIVE_API_ADDRESS = '';
const GOOGLE_AUTH_LINK = 'http://localhost:8000/v1/auth/google';

export {
  QUERY,
  BACKEND_ADDRESS,
  DRIVE_API_ADDRESS,
  BOOK_STATUS,
  TRANS_TYPES,
  GOOGLE_AUTH_LINK,
  SEARCH_FIELD,
  DAY_VN,
};
