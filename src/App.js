import { Routes, Route } from "react-router-dom";
import { DefaultLayout } from "./layout";
import {
  Login,
  Register,
  Home,
  HotelSingle,
  HotelBooking,
  UserBooking,
  UserEdit,
  UserProfile,
  Missing,
  SearchHotel,
} from "./pages";

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
            <Route path='hotel/view/:id' element={<HotelSingle />} />
            <Route path='search/:id' element={<SearchHotel/>}/>
          </Route>
          <Route>
            <Route path='user/profile/:id' element={<UserProfile />} />
            <Route path='user/edit/:id' element={<UserEdit />} />
            <Route path='user/booking/:id' element={<UserBooking />} />
          </Route>
          {/* Missing route - 404 */}
          <Route path='*' element={<Missing />} />
        </Route>

        <Route path='/' >
          <Route path='hotel/booking/:id' element={<HotelBooking />} />
        </Route>
      </Routes>
    </main>
  );
}

export default App;
