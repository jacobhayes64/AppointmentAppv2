import { createSlice } from '@reduxjs/toolkit';

export const userSlice = createSlice({
	name: 'user',
	initialState: [],
	reducers: {
		loadUser: (state, action) => {
        const user = {
            iss : action.payload.iss,
            nbf : action.payload.nbf,
            aud : action.payload.aud,
            sub : action.payload.sub,
            email : action.payload.email,
            email_verified : action.payload.email_verified,
            azp : action.payload.azp,
            name : action.payload.name,
            picture : action.payload.picture,
            given_name: action.payload.given_name,
            family_name : action.payload.family_name,
            iat : action.payload.iat,
            exp : action.payload.exp,
            jti : action.payload.jti,
                    };
       // state.splice(0, 1, user);
            state.push(user);
		},

	        
        deleteUser: (state, action) => {
        const user = {
        };
        state.shift(0);
            },
        }, 
});

export const { loadUser, deleteUser } = userSlice.actions;

export default userSlice.reducer;