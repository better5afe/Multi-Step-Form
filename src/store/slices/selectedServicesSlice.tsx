import { createSlice } from '@reduxjs/toolkit';

const storedData = {
	storedPlan: localStorage.getItem('plan'),
};

const initialState = {
	selectedPlan: storedData.storedPlan
		? JSON.parse(storedData.storedPlan).planName
		: '',
	selectedPlanID: storedData.storedPlan
		? JSON.parse(storedData.storedPlan).planID
		: '',
};

const selectedServicesSlice = createSlice({
	name: 'selectedServices',
	initialState,
	reducers: {
		selectPlan: (state, action) => {
			state.selectedPlan = action.payload.planName;
			state.selectedPlanID = action.payload.planID;

			localStorage.setItem(
				'plan',
				JSON.stringify({
					planName: action.payload.planName,
					planID: action.payload.planID,
				})
			);
		},
	},
});

export const { selectPlan } = selectedServicesSlice.actions;
export default selectedServicesSlice.reducer;
