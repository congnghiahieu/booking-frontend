import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY } from '../../../utils/constants';

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
    getUserByUsername: builder.query({
      query: username => `/v1/users?username=${username}`,
      keepUnusedDataFor: 60,
      transformResponse: response => {
        const modified = {
          ...response,
          id: response._id,
        };
        delete modified._id;
        return modified;
      },
      providesTags: (result, error, arg) => [{ type: 'User', id: result.id }],
    }),
  }),
});

export const { useGetUserByIdQuery, useGetUserByUsernameQuery } = usersApiSlice;
