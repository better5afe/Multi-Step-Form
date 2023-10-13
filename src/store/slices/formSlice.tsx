import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { FormState, FormAction } from '../../models/types';

const initialState: FormState = {
	name: {
		isValid: true,
		errorMessage: '',
	},
	email: {
		isValid: true,
		errorMessage: '',
	},
	phone: {
		isValid: true,
		errorMessage: '',
	},
};

const formSlice = createSlice({
	name: 'form',
	initialState,
	reducers: {
		setInputValidity: (state, action: PayloadAction<FormAction>) => {
			state[action.payload.property].isValid = action.payload.isValid;
			state[action.payload.property].errorMessage = action.payload.errorMessage;
		},
	},
});

export const { setInputValidity } = formSlice.actions;
export default formSlice.reducer;
