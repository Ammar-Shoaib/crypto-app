import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'

const cryptoApiHeaders = {
    'x-rapidapi-host': 'coinranking1.p.rapidapi.com',
    'x-rapidapi-key': '12d09cb89bmsh3d8236317a4f9a8p142e1djsn381371d386e0'
}

const baseUrl = 'https://coinranking1.p.rapidapi.com'

const createRequest = url => ({ url, headers:cryptoApiHeaders })

export const cryptoApi = createApi({
    reducerPath: 'crypto',
    baseQuery: fetchBaseQuery({ baseUrl }),
    endpoints: (builder) => ({
        getCryptos: builder.query({
            query: (count) => createRequest(`/coins?limit=${count}`)
        }),
        getCryptoDetails: builder.query({
            query: (coinId) => createRequest(`/coin/${coinId}`)
        }),
        getCryptoExchanges: builder.query({
            query: () => createRequest(`/exchanges`)
        }),
        getCryptoHistory: builder.query({
            query: ({ coinId, timePeriod }) => createRequest(`/coin/${coinId}/history/${timePeriod}`)
        })
    }) 
})

export const {
    useGetCryptosQuery,
    useGetCryptoDetailsQuery,
    useGetCryptoExchangesQuery,
    useGetCryptoHistoryQuery
} = cryptoApi