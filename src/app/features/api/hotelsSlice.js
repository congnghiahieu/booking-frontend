import { apiSlice } from './apiSlice';
import { createEntityAdapter } from '@reduxjs/toolkit';
import { QUERY, SORT_TYPE } from '../../../utils/constants';

const hotelsApdater = createEntityAdapter({
  sortComparer: (a, b) => new Date(b.updatedAt) - new Date(a.updatedAt),
});

const initialState = hotelsApdater.getInitialState();

export const hotelsApiSlice = apiSlice.injectEndpoints({
  endpoints: builder => ({
    getAllHotels: builder.query({
      query: ({ page = QUERY.DEFAULT_PAGE, perPage = QUERY.DEFAULT_PER_PAGE, province, name }) =>
        `/v1/hotels?page=${page}&per_page=${perPage}&province=${province}&name=${name}`,
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
      keepUnusedDataFor: 60,
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

export const selectFilteredIds = (data, type, filterStar, filterPrices) => {
  let newIds = data.ids.slice(0);

  // Sort
  switch (type) {
    case SORT_TYPE.MOST_CMT:
      newIds.sort((a, b) => {
        const cmtA = data.entities[a].cmtSum;
        const cmtB = data.entities[b].cmtSum;
        return cmtA - cmtB;
      });
      break;
    case SORT_TYPE.MOST_STAR:
      newIds.sort((a, b) => {
        const starA = data.entities[a].stars;
        const starB = data.entities[b].stars;
        return starB - starA;
      });
      break;
    case SORT_TYPE.MOTST_CHEAP:
      newIds.sort((a, b) => {
        const pricesA = data.entities[a].cheapest || 500000;
        const pricesB = data.entities[b].cheapest || 500000;
        return pricesA - pricesB;
      });
      break;
    case SORT_TYPE.MOST_EXPENSIVE:
      newIds.sort((a, b) => {
        const pricesA = data.entities[a].cheapest || 500000;
        const pricesB = data.entities[b].cheapest || 500000;
        return pricesB - pricesA;
      });
      break;
    default:
      break;
  }

  // Filter star
  if (filterStar.length !== 0) {
    newIds = newIds.filter(id => {
      const hotelStar = data.entities[id].stars;
      return filterStar.includes(hotelStar);
    });
  }
  // Filter prices
  if (filterPrices.length !== 0) {
    newIds = newIds.filter(id => {
      const hotelPrices = data.entities[id].cheapest || 500000;
      return filterPrices.some(range => {
        // start <= hotel price <= end
        if (hotelPrices < range.start) return false;
        if (!range.end) return true;
        return hotelPrices <= range.end;
      });
    });
  }

  return newIds;
};

export const { useGetAllHotelsQuery, useGetHotelByIdQuery } = hotelsApiSlice;
