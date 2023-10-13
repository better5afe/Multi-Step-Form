import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import formReducer from './slices/formSlice';
import userDataReducer from './slices/userDataSlice';

const store = configureStore({
	reducer: {
		step: stepReducer,
		form: formReducer,
		userData: userDataReducer,
	},
});

export default store;
