import { createSlice } from '@reduxjs/toolkit';

const initialState = 1;

const stepSlice = createSlice({
	name: 'step',
	initialState,
	reducers: {
		setStep: (state, action) => {
			return action.payload;
		},
	},
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
