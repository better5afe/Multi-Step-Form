import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import userReducer from './slices/userSlice';

const store = configureStore({
	reducer: {
		step: stepReducer,
		user: userReducer,
	},
});

export default store;
