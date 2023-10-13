import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState, UserAction } from '../../models/types';

const initialState: UserState = {
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

const userSlice = createSlice({
	name: 'user',
	initialState,
	reducers: {
		setInputValidity: (state, action: PayloadAction<UserAction>) => {
			state[action.payload.property].isValid = action.payload.isValid;
			state[action.payload.property].errorMessage = action.payload.errorMessage;
		},
	},
});

export const { setInputValidity } = userSlice.actions;
export default userSlice.reducer;
