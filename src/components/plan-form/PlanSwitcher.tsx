import { useSelector, useDispatch } from 'react-redux';
import {
	selectMonthlyPricing,
	selectYearlyPricing,
} from '../../store/slices/selectedServicesSlice';
import { AppStateObject } from '../../models/types';
import { PlanSwitcherProps } from '../../models/types';

const PlanSwitcher: React.FC<PlanSwitcherProps> = ({ activePlan }) => {
	const planType = useSelector(
		(state: AppStateObject) => state.selectedServices.selectedPlanType
	);

	const dispatch = useDispatch();

	const changePlanHandler = () => {
		if (planType === 'mo') {
			dispatch(selectYearlyPricing());
		} else {
			dispatch(selectMonthlyPricing());
		}
	};

	return (
		<div className='flex justify-center items-center p-3 bg-alabaster rounded-lg font-medium large:p-5 large:mt-8'>
			<p className={`${planType === 'mo' && 'text-marineBlue'}`}>Monthly</p>
			<div
				tabIndex={0}
				className={`switcher ${
					planType === 'yr' && 'switcher--active'
				} relative mx-4 w-10 h-5 bg-marineBlue outline-none rounded-xl cursor-pointer transition-colors duration-300 hover:bg-purplishBlue focus:bg-purplishBlue large:mx-8`}
				onClick={changePlanHandler}
			></div>
			<p className={`${planType === 'yr' && 'text-marineBlue'}`}>Yearly</p>
		</div>
	);
};

export default PlanSwitcher;
