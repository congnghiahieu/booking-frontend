import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY } from '../../../utils/constants';

const booksAdapter = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = booksAdapter.getInitialState();

export const booksApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getBooksByUserId: builder.query({
      query: ({ userId, page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE }) =>
        `/v1/books?user_id=${userId}&page=${page}&per_page=${perPage}&populate=true`,
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
        const bookList = booksAdapter.setAll(initialState, modifiedData);
        return {
          ...bookList,
          total: response.total,
          totalPages: response.total_page,
          curTotal: response.cur_total,
        };
      },
      providesTags: (result, error, arg) => {
        return [{ type: 'Book', id: arg }, ...result.ids.map(id => ({ type: 'Book', id }))];
      },
    }),
    addBook: builder.mutation({
      query: newBookData => ({
        url: '/v1/books',
        method: 'POST',
        body: newBookData,
      }),
      invalidatesTags: (result, error, arg) => [
        { type: 'Book', id: arg.userId },
        { type: 'Book', id: arg.hotelId },
      ],
    }),
    updateBookById: builder.mutation({
      query: ({ id, flag }) => ({
        url: `/v1/books/update_info`,
        method: 'PUT',
        body: {
          id,
          flag,
        },
      }),
      invalidatesTags: (result, error, arg) => [{ type: 'Book', id: arg.id }],
    }),
  }),
});

export const { useGetBooksByUserIdQuery, useAddBookMutation, useUpdateBookByIdMutation } =
  booksApiSlice;
