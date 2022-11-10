import {createApi,fetchBaseQuery} from "@reduxjs/toolkit/query/react"
import {User,Log} from "../model/user.model"
export const userApi=createApi({
    reducerPath:"userApi",
    tagTypes:["Auth"],
    baseQuery:fetchBaseQuery({
        baseUrl:"http://localhost:7000",
        credentials: "include",
    }),
        endpoints:(builder)=>({
        useregister:builder.query<any,User>({
            query:()=>'/registeqr',
            providesTags:["Auth"]
        }),
        getUser:builder.query<any,any>({
            query:()=>'/logwin',
            providesTags:["Auth"]
            }),
        getHome:builder.query<any,void>({
            query:()=>'/home',
            providesTags:["Auth"]
            }),

        register:builder.mutation<any,User>({
            query:user=>({
                url:"/register",
                method:"POST",
                body:user,
            }),
            invalidatesTags:["Auth"]
        }),
        login:builder.mutation<any,Log>({
            query:user=>({
                url:"/login",
                method:"POST",
                body:user,
            }),
            invalidatesTags:["Auth"]
        }),

        // updateUser:builder.mutation<void,User>({
        //     query:({id,...rest})=>({
        //         url:`/user/${id}`,
        //         method:"PUT",
        //         body:rest
        //     }),
        //     invalidatesTags:["Auth"]
        // }),

        deleteUser:builder.mutation<void,string>({
            query:id=>({
                url:`/user/${id}`,
                method:"DELETE"
            }),
            invalidatesTags:["Auth"]
        })
   }),
})

export const {
    // useGetUsersQuery,
    useGetHomeQuery,
    useLoginMutation,
    useRegisterMutation
    // useGetUserQuery,
    // useAddUserMutation,
    // useUpdateUserMutation,
    // useDeleteUserMutation
}=userApi