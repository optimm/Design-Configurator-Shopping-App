import { createSlice } from "@reduxjs/toolkit";


const userSlice = createSlice({
    name: "user",
    initialState: {
        user: {},
        isAuthenticated: false,
    },
    reducers: {
        setUser: (state, action) => {
            state.user = action.payload;
            state.isAuthenticated = true;
        },
        clearUser: (state, action) => {
            state.user = {};
            state.isAuthenticated = false;
        }
    }
});

export const { setUser, clearUser } = userSlice.actions;
export default userSlice.reducer;