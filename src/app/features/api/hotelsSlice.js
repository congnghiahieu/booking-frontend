import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY } from '../../../utils/constants';

const hotelsApdater = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = hotelsApdater.getInitialState();

export const hotelsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllHotels: builder.query({
      query: ({ page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE }) =>
        `/v1/hotels?page=${page}&per_page=${perPage}`,
      transformResponse: response => {
        const modifiedData = response.data.map(dt => {
          const modified = {
            ...dt,
            id: dt._id,
          };
          delete modified._id;
          return modified;
        });

        // Normalizing data
        const hotelList = hotelsApdater.setAll(initialState, modifiedData);

        return {
          ...hotelList,
          total: response.total,
          totalPages: response.total_page,
          curTotal: response.cur_total,
        };
      },
      providesTags: (result, error, arg) => {
        return [{ type: 'Hotel', id: 'LIST' }, ...result.ids.map(id => ({ type: 'Hotel', id }))];
      },
    }),
    getHotelById: builder.query({
      query: hotelId => `/v1/hotels?hotel_id=${hotelId}`,
      keepUnusedDataFor: 0,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'Hotel', id: arg }],
    }),
  }),
});

export const { useGetAllHotelsQuery, useGetHotelByIdQuery } = hotelsApiSlice;
