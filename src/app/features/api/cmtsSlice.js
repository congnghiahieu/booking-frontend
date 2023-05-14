import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY } from '../../../utils/constants';

const cmtsApdater = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = cmtsApdater.getInitialState();

export const cmtsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getCmtsByUserId: builder.query({
      query: ({ userId, populate, page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE }) =>
        `/v1/cmts?user_id=${userId}&page=${page}&per_page=${perPage}&populate=${populate}`,
      transformResponse: response => {
        const modifiedData = response.map(dt => {
          const modified = {
            ...dt,
            id: dt._id,
          };
          delete modified._id;
          return modified;
        });

        // // Normalizing data
        // const cmtList = cmtsApdater.setAll(initialState, modifiedData);

        // return {
        //   ...cmtList,
        //   total: response.total,
        //   totalPages: response.total_page,
        //   curTotal: response.cur_total,
        // };
        return modifiedData;
      },
      providesTags: (result, error, arg) => {
        return [
          { type: 'Comment', id: arg.userId },
          ...result.map(dt => ({ type: 'Comment', id: dt.id })),
        ];
      },
    }),
    getCmtsByHotelId: builder.query({
      query: ({ hotelId, page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE }) =>
        `/v1/cmts?hotel_id=${hotelId}&page=${page}&per_page=${perPage}`,
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
        const cmtList = cmtsApdater.setAll(initialState, modifiedData);

        return {
          ...cmtList,
          total: response.total,
          totalPages: response.total_page,
          curTotal: response.cur_total,
        };
      },
      providesTags: (result, error, arg) => {
        return [{ type: 'Comment', id: arg }, ...result.ids.map(id => ({ type: 'Comment', id }))];
      },
    }),
    addCmt: builder.mutation({
      query: newCmtData => ({
        url: '/v1/cmts',
        method: 'POST',
        body: newCmtData,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Comment', id: arg.userId },
        { type: 'Comment', id: arg.hotelId },
      ],
    }),
    updateCmt: builder.mutation({
      query: cmtContent => ({
        url: '/v1/cmts/update_cmt',
        method: 'PUT',
        body: {
          ...cmtContent,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Comment', id: arg.id }],
    }),
    deleteCmtById: builder.mutation({
      query: cmtId => ({
        url: `/v1/cmts?cmt_id=${cmtId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Comment', id: arg }],
    }),
    deleteCmtByUserId: builder.mutation({
      query: userId => ({
        url: `/v1/cmts?user_id=${userId}`,
        method: 'DELETE',
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Comment', id: arg }],
    }),
  }),
});

export const {
  useGetCmtsByUserIdQuery,
  useGetCmtsByHotelIdQuery,
  useAddCmtMutation,
  useUpdateCmtMutation,
  useDeleteCmtByIdMutation,
  useDeleteCmtByUserIdMutation,
} = cmtsApiSlice;
