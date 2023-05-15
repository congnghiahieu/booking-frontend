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
import { NotAuth, RequiredAuth, PersistLogin } from './components';
import BookingProvider from './context/BookingContext';
import RegisterProvider from './context/RegisterContext';
import LoginSuccess from './pages/Login/LoginSuccess';

function App() {
  return (
    <main className='App'>
      <Routes>
        {/* Default Layout */}
        <Route element={<NotAuth />}>
          <Route path='/login/success' element={<LoginSuccess />} />
        </Route>

        <Route path='/' element={<DefaultLayout />}>
          {/* Need No Auth route */}
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

          {/* Public route */}
          {/* <Route element={<PersistLogin />}> */}
          <Route path='/' element={<Home />} />
          <Route>
            <Route path='hotel/view/:hotelSlug/:hotelId' element={<HotelSingle />} />
            <Route path='search' element={<SearchHotel />} />
          </Route>
          <Route path='/error' element={<ErrorPage />} />

          {/* Protected */}
          <Route element={<RequiredAuth />}>
            <Route path='user/booking' element={<UserBooking />} />
            <Route path='user/comments' element={<UserComments />} />
            <Route path='user/profile' element={<UserProfile />} />
            <Route path='/cart' element={<Cart />} />
          </Route>
        </Route>
        {/* </Route> */}

        {/* Protected */}
        {/* <Route element={<PersistLogin />}> */}
        <Route element={<RequiredAuth />}>
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
        </Route>
        {/* </Route> */}

        {/* Catch all - replace with 404 component if you want */}
        <Route path='*' element={<Navigate to='/' replace />} />
      </Routes>
    </main>
  );
}

export default App;
