import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react';

export const newsletterApi = createApi({
    reducerPath: 'newsletterApi',

    baseQuery: fetchBaseQuery({
        baseUrl: 'https://corebiz-test.herokuapp.com/api/v1'
    }),

    endpoints: (builder) => ({

        addNewsletter: builder.mutation({
            query: (data) => ({
                url: '/newsletter',
                method: 'POST',
                body: data
            })
        }),
    })
});

export const { useAddNewsletterMutation } = newsletterApi;