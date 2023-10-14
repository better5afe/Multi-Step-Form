import { useSelector, useDispatch } from 'react-redux';
import { AppStateObject, Prices } from '../../models/types';
import { setStep } from '../../store/slices/stepSlice';

const ServicesSummary = () => {
	const {
		selectedPlan,
		selectedPlanID,
		addOns,
		selectedPrices,
		selectedPlanType,
	} = useSelector((state: AppStateObject) => {
		return {
			selectedPlan: state.selectedServices.selectedPlan,
			selectedPlanID: state.selectedServices.selectedPlanID,
			addOns: state.selectedServices.selectedAddOns,
			selectedPrices: state.selectedServices.selectedPrices,
			selectedPlanType: state.selectedServices.selectedPlanType,
		};
	});

	const dispatch = useDispatch();

	let planType = 'Monthly';
	selectedPlanType === 'yr' && (planType = 'Yearly');

	let planPrice = selectedPrices[selectedPlanID as keyof Prices];

	return (
		<div className='p-5 mt-5 mb-3 bg-alabaster rounded-md'>
			<div className='plan-summary flex justify-between items-center pb-3'>
				<div>
					<p className='mb-0 text-[1rem] text-marineBlue font-medium large:text-[1.2rem]'>
						{selectedPlan} ({planType})
					</p>
					<a
						href='#'
						className='outline-none text-sm underline transition-colors duration-300 hover:text-marineBlue hover:decoration-marineBlue focus:text-marineBlue focus:decoration-marineBlue large:text-sm'
						onClick={() => {
							dispatch(setStep(2));
						}}
					>
						Change
					</a>
				</div>
				<p className='text-marineBlue font-bold'>
					${planPrice}/{selectedPlanType}
				</p>
			</div>
			<ul className='mt-3 text-sm'>
				{addOns.map((addOn) => (
					<li
						className='flex justify-between items-center mb-3'
						key={addOn.addOnID}
					>
						<p>{addOn.addOnName}</p>
						<p className='text-marineBlue font-medium'>
							+${selectedPrices[addOn.addOnID as keyof Prices]}/
							{selectedPlanType}
						</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServicesSummary;
