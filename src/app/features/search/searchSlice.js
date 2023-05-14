import { createSlice } from '@reduxjs/toolkit';
import { add } from 'date-fns';
import { SEARCH_FIELD } from '../../../utils/constants';

const initialHotelLink = {
  id: '',
  slug: '',
};

export const searchSlice = createSlice({
  name: 'search',
  initialState: {
    value: '',
    err: '',
    focus: false,
    field: SEARCH_FIELD.BY_PROVINCE,
    hotelLink: {
      id: '',
      slug: '',
    },
    start: new Date().valueOf(),
    end: add(new Date(), { days: 1 }).valueOf(),
    adult: 1,
    children: 0,
    room: 1,
  },
  reducers: {
    setSearch: (state, action) => {
      state.value = action.payload;
      state.hotelLink = initialHotelLink;
    },
    setSearchErr: (state, action) => {
      state.err = action.payload;
    },
    setFocus: (state, action) => {
      state.focus = action.payload;
    },
    setField: (state, action) => {
      state.field = action.payload;
      state.value = '';
      state.hotelLink = initialHotelLink;
    },
    setHotelLink: (state, action) => {
      state.hotelLink = action.payload;
    },
    setStart: (state, action) => {
      state.start = action.payload;
    },
    setEnd: (state, action) => {
      state.end = action.payload;
    },
    increaseRoom: (state, action) => {
      // Số người lớn ít nhất phải bằng số phòng
      // max: 9
      if (state.room <= 8) {
        if (state.adult <= state.room) state.adult++;
        state.room++;
      }
    },
    decreaseRoom: (state, action) => {
      // min: 1
      if (state.room >= 2) state.room--;
    },
    increaseAdult: (state, action) => {
      // max: 36
      if (state.adult <= 35) {
        state.adult += 1;
      }
    },
    decreaseAdult: (state, action) => {
      // min: 1
      if (state.adult >= 2 && state.adult - 1 >= state.room) state.adult--;
    },
    increaseChilren: (state, action) => {
      // max: 9
      if (state.children <= 8) state.children++;
    },
    decreaseChildren: (state, action) => {
      // min: 0
      if (state.children >= 1) state.children--;
    },
  },
});

export const {
  setSearch,
  setSearchErr,
  setFocus,
  setField,
  setHotelLink,
  setStart,
  setEnd,
  increaseAdult,
  decreaseAdult,
  increaseRoom,
  decreaseRoom,
  increaseChilren,
  decreaseChildren,
} = searchSlice.actions;

export const selectSearch = state => [state.search.value, state.search.err];
export const selectSearchField = state => state.search.field;
export const selectFocus = state => state.search.focus;
export const selectHotelLink = state => state.search.hotelLink;
export const selectTime = state => [state.search.start, state.search.end];
export const selectAdult = state => state.search.adult;
export const selectRoom = state => state.search.room;
export const selectChilren = state => state.search.children;
