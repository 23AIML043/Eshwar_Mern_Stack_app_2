import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    users: [],
};
const userSlice = createSlice({
    name: 'users',
    initialState,
    reducers: {
    addUser: (state, actions) => {
        state.users = [...state.users, actions.payload];
    },
},
});
export const { addUser } = userSlice.actions;
export default userSlice.reducer;
