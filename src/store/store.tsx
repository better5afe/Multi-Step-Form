import { configureStore } from '@reduxjs/toolkit';
import stepReducer from './slices/stepSlice';
import formReducer from './slices/formSlice';
import userDataReducer from './slices/userDataSlice';
import selectedServicesReducer from './slices/selectedServicesSlice';

const store = configureStore({
	reducer: {
		step: stepReducer,
		form: formReducer,
		userData: userDataReducer,
		selectedServices: selectedServicesReducer,
	},
});

export default store;
