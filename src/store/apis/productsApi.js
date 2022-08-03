import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const productosApi = createApi({

    reducerPath: 'productosApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://corebiz-test.herokuapp.com/api/v1'
    }),

    endpoints: (builder) => ({

        getProducts: builder.query({
            query: () => '/products'
        }),
    })
});

export const { useGetProductsQuery } = productosApi;