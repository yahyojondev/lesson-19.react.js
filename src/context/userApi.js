import { api } from "./api";

export const userApi = api.injectEndpoints({
  endpoints: (build) => ({
    //delete user
    deleteUser: build.mutation({
      query: (id) => ({
        url: `/users/${id}`,
        method: "DELETE",
      }),
      invalidatesTags: ["User"],
    }),
    //get user
    getUser: build.query({
      query: (params) => ({
        url: "/users",
        params,
      }),
      providesTags: ["User"],
    }),
    // post user
    createUser: build.mutation({
      query: (body) => ({
        url: "/auth/sign-up",
        method: "POST",
        body,
      }),
      providesTags: ["User"],
    }),
  }),
});

export const { useCreateUserMutation, useGetUserQuery, useDeleteUserMutation } =
  userApi;
