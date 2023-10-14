import { createSlice } from '@reduxjs/toolkit';
import { SelectedServicesState } from '../../models/types';

const storedData = {
	storedPlan: localStorage.getItem('plan'),
	storedAddOns: localStorage.getItem('addons'),
};

const initialState: SelectedServicesState = {
	selectedPlan: storedData.storedPlan
		? JSON.parse(storedData.storedPlan).planName
		: '',
	selectedPlanID: storedData.storedPlan
		? JSON.parse(storedData.storedPlan).planID
		: '',
	selectedAddOns: storedData.storedAddOns
		? JSON.parse(storedData.storedAddOns)
		: [],
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
		selectAddOns: (state, action) => {
			const addonID = action.payload.addOnID;
			console.log(action.payload);

			const index = state.selectedAddOns.findIndex(
				(addOn) => addOn.addOnID === addonID
			);

			if (index !== -1) {
				const updatedArray = state.selectedAddOns.filter(
					(addOn) => addOn.addOnID !== addonID
				);

				state.selectedAddOns = updatedArray;
			} else {
				state.selectedAddOns = [...state.selectedAddOns, action.payload];
			}

			localStorage.setItem('addons', JSON.stringify(state.selectedAddOns));
		},
	},
});

export const { selectPlan, selectAddOns } = selectedServicesSlice.actions;
export default selectedServicesSlice.reducer;
