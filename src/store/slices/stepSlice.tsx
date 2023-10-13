import { createSlice } from '@reduxjs/toolkit';

const storedStep = localStorage.getItem('step');

const initialState = {
	step: storedStep ? +storedStep : 1,
};

const stepSlice = createSlice({
	name: 'step',
	initialState,
	reducers: {
		setStep: (state, action) => {
			state.step = action.payload;

			localStorage.setItem('step', action.payload);
		},
	},
});

export const { setStep } = stepSlice.actions;
export default stepSlice.reducer;
