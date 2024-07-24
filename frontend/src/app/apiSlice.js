import { createApi, fetchBaseQuery } from '@reduxjs/toolkit/query/react'
import { setCredentials, logOut } from '../features/auth/authSlice'

const baseQuery = fetchBaseQuery ({
    //URL for backend
    baseUrl :`${process.env.REACT_APP_API_URL}`,
    credentials:'include',
    prepareHeaders : ( headers, { getState }) => {
        const token = getState().auth.token
        if (token){
            headers.set("authorization", `Bearer ${token}`)
        }
        headers.set('Content-Type', 'application/json');
        return headers
    }

})

const baseQueryWithReauth = async (args, api, extraOptions) => {
    let result = await baseQuery (args, api, extraOptions)
    if(result?.error?.originalStatus === 403){  //can be 401
        const refreshResult = await baseQuery('/refresh', api, extraOptions)
        if (refreshResult?.data) {
            const user = api.getState().auth.user
            api.dispatch(setCredentials({ ...refreshResult.data, user}))
            result = await baseQuery (args, api, extraOptions)
        } else {
            api.dispatch(logOut())
        }
    }
    return result
}

export const apiSlice = createApi({
    baseQuery : baseQueryWithReauth,
    endpoints: builder => ({})
})