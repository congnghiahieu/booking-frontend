import { Routes, Route, Navigate } from 'react-router-dom';
import { DefaultLayout } from './layout';
import {
  Login,
  Register,
  Home,
  HotelSingle,
  HotelBooking,
  UserBooking,
  UserEdit,
  UserProfile,
  SearchHotel,
} from './pages';
import BookingProvider from './context/BookingContext';

function App() {
  return (
    <main className='App'>
      <Routes>
        {/* Default Layout */}
        <Route path='/' element={<DefaultLayout />}>
          {/* Public routes */}
          <Route path='login' element={<Login />} />
          <Route path='register' element={<Register />} />

          {/* Protected Routes - required Login */}
          <Route path='/' element={<Home />} />
          <Route>
            <Route path='hotel/view/:hotelId' element={<HotelSingle />} />
            <Route path='search' element={<SearchHotel />} />
          </Route>
          <Route>
            <Route path='user/profile' element={<UserProfile />} />
            <Route path='user/edit' element={<UserEdit />} />
            <Route path='user/booking' element={<UserBooking />} />
            <Route path='user/comments' element={<UserBooking />} />
          </Route>
          {/* <Route path='*' element={<Missing />} /> */}
        </Route>

        <Route path='/'>
          <Route
            path='hotel/booking/:id'
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
