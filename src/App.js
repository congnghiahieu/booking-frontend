import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout, BookingLayout } from './layout';
import {
  Login,
  Register,
  Home,
  HotelSingle,
  HotelBooking,
  UserBooking,
  UserComments,
  UserProfile,
  SearchHotel,
  Cart,
  ErrorPage,
} from './pages';
import { NotAuth } from './components';
import BookingProvider from './context/BookingContext';
import RegisterProvider from './context/RegisterContext';
import LoginSuccess from './pages/Login/LoginSuccess';

function App() {
  return (
    <main className='App'>
      <Routes>
        {/* Default Layout */}
        <Route path='/' element={<DefaultLayout />}>
          {/* Public routes */}
          <Route element={<NotAuth />}>
            <Route path='login' element={<Login />} />
            <Route
              path='register'
              element={
                <RegisterProvider>
                  <Register />
                </RegisterProvider>
              }
            />
          </Route>
          <Route path='login/success' element={<LoginSuccess />} />
          {/* Protected Routes - required Login */}
          <Route path='/' element={<Home />} />
          <Route>
            <Route path='hotel/view/:hotelSlug/:hotelId' element={<HotelSingle />} />
            <Route path='search' element={<SearchHotel />} />
          </Route>
          <Route>
            <Route path='user/booking' element={<UserBooking />} />
            <Route path='user/comments' element={<UserComments />} />
            <Route path='user/profile' element={<UserProfile />} />
            {/* <Route path='user/comments' element={<UserBooking />} /> */}
          </Route>
          <Route path='/error' element={<ErrorPage />} />

          {/* <Route path='*' element={<Missing />} /> */}

          <Route path='/cart' element={<Cart />} />
        </Route>

        <Route path='/' element={<BookingLayout />}>
          <Route
            path='hotel/booking/:hotelSlug/:serviceSlug/:hotelId/:serviceId'
            element={
              <BookingProvider>
                <HotelBooking />
              </BookingProvider>
            }
          />
        </Route>

        {/* Catch all - replace with 404 component if you want */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </main>
  );
}

export default App;
