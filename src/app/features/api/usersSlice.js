import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';

const usersAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = usersAdapter.getInitialState();

export const usersApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getUserById: builder.query({
      query: userId => `/v1/users?user_id=${userId}`,
      keepUnusedDataFor: 60,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'User', id: arg }],
    }),
    getFavByUserId: builder.query({
      query: userId => `/v1/users/fav?user_id=${userId}`,
      keepUnusedDataFor: 60,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'Fav', id: arg }],
    }),
    getCartByUserId: builder.query({
      query: ({ userId, populate }) => `/v1/users/cart?user_id=${userId}&populate=${populate}`,
      keepUnusedDataFor: 60,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'Cart', id: arg.userId }],
    }),
    addFav: builder.mutation({
      query: ({ userId, hotelId }) => ({
        url: '/v1/users/fav',
        method: 'POST',
        body: {
          id: userId,
          hotelId: hotelId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
    }),
    addCart: builder.mutation({
      query: ({ userId, serviceId }) => ({
        url: '/v1/users/cart',
        method: 'POST',
        body: {
          id: userId,
          serviceId: serviceId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
    }),
    deleteFav: builder.mutation({
      query: ({ userId, hotelId }) => ({
        url: '/v1/users/fav',
        method: 'DELETE',
        body: {
          id: userId,
          hotelId: hotelId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
    }),
    deleteCart: builder.mutation({
      query: ({ userId, serviceId }) => ({
        url: '/v1/users/cart',
        method: 'DELETE',
        body: {
          id: userId,
          serviceId: serviceId,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'User', id: arg.userId }],
    }),
  }),
});

export const {
  useGetUserByIdQuery,
  useGetFavByUserIdQuery,
  useGetCartByUserIdQuery,
  useAddFavMutation,
  useAddCartMutation,
  useDeleteFavMutation,
  useDeleteCartMutation,
} = usersApiSlice;
