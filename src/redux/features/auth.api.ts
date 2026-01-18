import baseApi from "../api/baseApi";

const authApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        signIn: builder.mutation({
            query: (data) =>{
                return {
                    url: '/login',
                    method: 'POST',
                    body: data
                }
            }
        })
    })
})

export const { useSignInMutation } = authApi;