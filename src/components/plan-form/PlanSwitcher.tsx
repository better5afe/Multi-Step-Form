import { useState } from 'react';
import { PlanSwitcherProps, PlanTypes } from '../../models/types';

const PlanSwitcher: React.FC<PlanSwitcherProps> = ({ activePlan }) => {
	const [dummyActivePlan, setDummyActivePlan] = useState(PlanTypes.MONTHLY);

	const changePlanHandler = () => {
		if (dummyActivePlan === PlanTypes.MONTHLY) {
			setDummyActivePlan(PlanTypes.YEARLY);
		} else {
			setDummyActivePlan(PlanTypes.MONTHLY);
		}
	};

	return (
		<div className='flex justify-center items-center p-3 bg-alabaster rounded-lg font-medium large:p-5 large:mt-8'>
			<p
				className={`${
					dummyActivePlan === PlanTypes.MONTHLY && 'text-marineBlue'
				}`}
			>
				Monthly
			</p>
			<div
				tabIndex={0}
				className={`switcher ${
					dummyActivePlan !== PlanTypes.MONTHLY && 'switcher--active'
				} relative mx-4 w-10 h-5 bg-marineBlue outline-none rounded-xl cursor-pointer transition-colors duration-300 hover:bg-purplishBlue focus:bg-purplishBlue large:mx-8`}
				onClick={changePlanHandler}
			></div>
			<p
				className={`${
					dummyActivePlan !== PlanTypes.MONTHLY && 'text-marineBlue'
				}`}
			>
				Yearly
			</p>
		</div>
	);
};

export default PlanSwitcher;
