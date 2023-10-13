import { PayloadAction, createSlice } from '@reduxjs/toolkit';
import { UserState, UserAction } from '../../models/types';

const storedUserData = {
	storedName: localStorage.getItem('name'),
	storedEmail: localStorage.getItem('email'),
	storedPhone: localStorage.getItem('phone'),
};

const initialState: UserState = {
	name: storedUserData.storedName ? storedUserData.storedName : '',
	email: storedUserData.storedEmail ? storedUserData.storedEmail : '',
	phone: storedUserData.storedPhone ? storedUserData.storedPhone : '',
};

const userDataSlice = createSlice({
	name: 'userData',
	initialState,
	reducers: {
		setUserData: (state, action: PayloadAction<UserAction>) => {
			state[action.payload.property] = action.payload.value;

			localStorage.setItem(action.payload.property, action.payload.value);
		},
	},
});

export const { setUserData } = userDataSlice.actions;
export default userDataSlice.reducer;
