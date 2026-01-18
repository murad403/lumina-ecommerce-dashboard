import baseApi from "../api/baseApi";

const categoryManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        addCategory: builder.mutation({
            query: (data) =>{
                return {
                    url: '/products/categories/',
                    method: 'POST',
                    body: data
                }
            }
        }),

        updateCategory: builder.mutation({
            query: ({data, slug}) =>{
                return {
                    url: `/products/categories/${slug}/`,
                    method: 'POST',
                    body: data
                }
            }
        }),

        deleteCategory: builder.mutation({
            query: (slug) =>{
                return {
                    url: `/products/categories/${slug}/`,
                    method: 'DELETE'
                }
            }
        }),
    })
})

export const { useAddCategoryMutation, useUpdateCategoryMutation, useDeleteCategoryMutation } = categoryManagementApi;