import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		loadUser: (state, action) => {
        const user = {
        jwt: action.payload.jwt,
                    };
        state.splice(0, 1, user);
		},

	        
        deleteUser: (state, action) => {
        const user = {
            jwt : undefined,    
        };
        state.splice(0, 1, user);
            },
        }, 
});

export const { loadUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;