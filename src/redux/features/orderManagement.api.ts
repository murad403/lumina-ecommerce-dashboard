import baseApi from "../api/baseApi";

const orderManagementApi = baseApi.injectEndpoints({
    endpoints: (builder) =>({
        allOrders: builder.query({
            query: ({status, search}) =>{
                const params = new URLSearchParams();
                if(status) params.append('status', status);
                if(search) params.append('search', search);
                const queryString = params.toString();
                const url = queryString ? `/orders/admin/orders/?${queryString}` : '/orders/admin/orders/';

                return {
                    url,
                    method: 'GET'
                }
            }
        }),

        orderDetails: builder.query ({
            query: (order_id) =>{
                return {
                    url: `/orders/admin/orders/${order_id}/`,
                    method: 'GET'
                }
            }
        }),
        
        updateOrderStatus: builder.mutation({
            query: ({order_id, data}) =>{
                return {
                    url: `/orders/admin/orders/${order_id}/status/`,
                    method: 'PATCH',
                    body: data
                }
            }
        })
    })
})

export const { useAllOrdersQuery, useOrderDetailsQuery, useUpdateOrderStatusMutation } = orderManagementApi;