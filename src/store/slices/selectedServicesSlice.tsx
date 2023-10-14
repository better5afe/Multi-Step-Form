import { createSlice } from '@reduxjs/toolkit';
import { SelectedServicesState, PlanTypes } from '../../models/types';

const storedData = {
	storedPlan: localStorage.getItem('plan'),
	storedAddOns: localStorage.getItem('addons'),
	storedPricing: localStorage.getItem('pricing'),
};

const monthlyPrices = {
	advanced: 9,
	arcade: 12,
	pro: 15,
	service: 1,
	storage: 2,
	profile: 2,
};

const yearlyPrices = {
	advanced: 90,
	arcade: 120,
	pro: 150,
	service: 10,
	storage: 20,
	profile: 20,
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
	selectedPrices: storedData.storedPricing
		? JSON.parse(storedData.storedPricing).pricing
		: monthlyPrices,
	selectedPlanType: storedData.storedPricing
	? JSON.parse(storedData.storedPricing).planType
	: 'mo',
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
		selectMonthlyPricing: (state) => {
			state.selectedPrices = monthlyPrices;
			state.selectedPlanType = 'mo';

			localStorage.setItem(
				'pricing',
				JSON.stringify({
					pricing: monthlyPrices,
					planType: 'mo',
				})
			);
		},
		selectYearlyPricing: (state) => {
			state.selectedPrices = yearlyPrices;
			state.selectedPlanType = 'yr';

			localStorage.setItem(
				'pricing',
				JSON.stringify({
					pricing: yearlyPrices,
					planType: 'yr',
				})
			);
		},
	},
});

export const {
	selectPlan,
	selectAddOns,
	selectMonthlyPricing,
	selectYearlyPricing,
} = selectedServicesSlice.actions;
export default selectedServicesSlice.reducer;
