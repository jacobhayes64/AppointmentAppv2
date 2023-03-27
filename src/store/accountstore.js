import { configureStore } from '@reduxjs/toolkit';
import userReducer from './accountstore.slice';

export default configureStore({
	reducer: {
		user: userReducer,
	},
});