import { useSelector, useDispatch } from 'react-redux';
import { AppStateObject } from '../../models/types';
import { setStep } from '../../store/slices/stepSlice';

const ServicesSummary = () => {
	const { selectedPlan, addOns } = useSelector((state: AppStateObject) => {
		return {
			selectedPlan: state.selectedServices.selectedPlan,
			addOns: state.selectedServices.selectedAddOns,
		};
	});

	const dispatch = useDispatch();

	return (
		<div className='p-5 mt-5 mb-3 bg-alabaster rounded-md'>
			<div className='plan-summary flex justify-between items-center pb-3'>
				<div>
					<p className='mb-0 text-[1rem] text-marineBlue font-medium large:text-[1.2rem]'>
						{selectedPlan} (Monthly)
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
				<p className='text-marineBlue font-bold'>$9/mo</p>
			</div>
			<ul className='mt-3 text-sm'>
				{addOns.map((addOn) => (
					<li
						className='flex justify-between items-center mb-3'
						key={addOn.addOnID}
					>
						<p>{addOn.addOnName}</p>
						<p className='text-marineBlue font-medium'>+$12/mo</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServicesSummary;
