import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY } from '../../../utils/constants';

const servicesAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = servicesAdapter.getInitialState();

export const servicesApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getServiceById: builder.query({
      query: serviceId => `/v1/services?id=${serviceId}`,
      keepUnusedDataFor: 0,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'Service', id: arg }],
    }),
    getServiceByHotelId: builder.query({
      query: ({ hotelId, page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE }) =>
        `/v1/services?hotel_id=${hotelId}&page=${page}&per_page=${perPage}`,
      keepUnusedDataFor: 0,
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
        const serviceList = servicesAdapter.setAll(initialState, modifiedData);

        return {
          ...serviceList,
          total: response.total,
          totalPages: response.total_page,
          curTotal: response.cur_total,
        };
      },
      providesTags: (result, error, arg) => {
        return [
          { type: 'Service', id: 'LIST' },
          ...result.ids.map(id => ({ type: 'Service', id })),
        ];
      },
    }),
  }),
});

export const { useGetServiceByIdQuery, useGetServiceByHotelIdQuery } = servicesApiSlice;
