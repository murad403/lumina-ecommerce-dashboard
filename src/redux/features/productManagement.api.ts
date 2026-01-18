import baseApi from "../api/baseApi";

const productManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addProduct: builder.mutation({
            query: (data) =>{
                return {
                    url: '/products/products/',
                    method: 'POST',
                    body: data
                }
            }
        }),

        updateProduct: builder.mutation({
            query: ({data, slug}) =>{
                return {
                    url: `/products/products/${slug}/`,
                    method: 'POST',
                    body: data
                }
            }
        }),

        deleteProduct: builder.mutation({
            query: (slug) =>{
                return {
                    url: `/products/products/${slug}/`,
                    method: 'DELETE'
                }
            }
        }),
    })
})

export const { useAddProductMutation, useUpdateProductMutation, useDeleteProductMutation } = productManagementApi;