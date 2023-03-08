# Booking hotel Frontend

## Prerequisites

### 1. JS cơ bản:

- Toán tử điều kiện: && , || , ? (Ternary statement)
- Array method: forEach, map, filter, reduce, some, every, includes
- Callback
- HTML DOM: Lấy ra các DOM Element (getElementbyId, getElementByClass, ...), các sự kiện onClick, onChange, eventListener, ...
- Promise, async, await
- Arrow function, template literal (dấu ``)
- Destructuring, Rest, Spread
- Optional chaining (?.), Import & Export module

### 2. JS nâng cao (F8):

- IIFE, Scope, Closure

### 3. CSS:

- CSS selector, chia layout và responsive

### 4. React (F8):

- NPM, ReactDOM, JSX, chia Components, Props và children props
- Các loại hooks:
  - useState (Quan trọng)
  - useState với các thẻ input kiểu text, checkbox, radio (Quan trọng)
  - useEffect (Quan trọng)
  - useRef (Quan trọng)
  - useCallback
  - useMemo
  - useReducer và useContext (Quan trọng)
- CSS trong React: Project sẽ sử dụng **CSS Module** và **SCSS**, thư viện clsx
- React Router DOM: dựng base router cho project (các đường link chuyển hướng trong website)
- Project sẽ sử dụng **Redux** và **Redux Toolkit** để làm **State Management**

## Router

Project sẽ có các router (ví dụ: `http://localhost:3000/login`) cơ bản sau:

- `/login`: chức năng đăng nhập
- `/register`: chức năng đăng ký
- `/home`: hiển thị list các hotel, thanh search filter hotel (nhiều chức năng filter - khó), sidebar (tuỳ giao diện)
- `/hotel/view/:id`: Xem thông tin về hotel, Điểm đánh giá, comments
- `/hotel/booking/:id`: Form đăng ký hotel
- `/user/profile/:id`: trang Profile của user
- `/user/edit/:id`: trang Edit Profile của user
- `/user/booking/:id`: trang xem những hotel đã và đang được đặt lịch của user

## Reference

[Booking hotel Backend](https://github.com/congnghiahieu/booking-backend)

[Booking hotel Admin](https://github.com/congnghiahieu/booking-admin)
