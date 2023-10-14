import { useSelector } from 'react-redux';
import { AppStateObject, Prices } from '../../models/types';

const TotalSummary = () => {
	const {
		selectedPlanID,
		selectedAddOns,
		selectedPrices,
		selectedPlanType,
	} = useSelector((state: AppStateObject) => {
		return {
			selectedPlanID: state.selectedServices.selectedPlanID,
			selectedAddOns: state.selectedServices.selectedAddOns,
			selectedPrices: state.selectedServices.selectedPrices,
			selectedPlanType: state.selectedServices.selectedPlanType,
		};
	});

	let planType = 'month';

	selectedPlanType === 'yr' && (planType = 'year');

	let planPrice = selectedPrices[selectedPlanID as keyof Prices];

	let addOnsPrice = selectedAddOns.map(
		(addOn) => selectedPrices[addOn.addOnID as keyof Prices]
	);

	let summary;

	if (selectedAddOns.length > 0) {
		summary = planPrice + addOnsPrice.reduce((a, b) => a + b);
	} else {
		summary = planPrice;
	}

	return (
		<div className='flex justify-between items-center px-5'>
			<p className='text-sm'>Total (per {planType})</p>
			<p className='text-purplishBlue font-bold text-base large:text-lg'>
				${summary}/{selectedPlanType}
			</p>
		</div>
	);
};

export default TotalSummary;
