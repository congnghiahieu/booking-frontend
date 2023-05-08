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

const BACKEND_ADDRESS = 'http://localhost:8000';
const DRIVE_API_ADDRESS = '';
const GOOGLE_AUTH_LINK = 'http://localhost:8000/v1/auth/google';

export { QUERY, BACKEND_ADDRESS, DRIVE_API_ADDRESS, BOOK_STATUS, TRANS_TYPES, GOOGLE_AUTH_LINK };
