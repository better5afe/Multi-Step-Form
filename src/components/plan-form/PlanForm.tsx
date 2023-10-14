import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { setStep } from '../../store/slices/stepSlice';
import { Plans, PlanTypes, AppStateObject } from '../../models/types';
import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';
import PlanCard from './PlanCard';
import PlanSwitcher from './PlanSwitcher';

const PlanForm = () => {
	const [error, setError] = useState(false);

	const selectedPlan = useSelector(
		(state: AppStateObject) => state.selectedServices.selectedPlan
	);

	const dispatch = useDispatch();

	const submitPlanHandler = (event: React.FormEvent) => {
		event.preventDefault();

		if (!selectedPlan) {
			setError(true);
			return;
		}

		setError(false);
		dispatch(setStep(3));
	};

	const goBackHandler = () => {
		dispatch(setStep(1));
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Select your plan'
					stepDesc='You have the option of monthly or yearly billing.'
				/>
				<div className='my-5 large:flex justify-between'>
					<PlanCard id={Plans.ARCADE} planName='Arcade' />
					<PlanCard id={Plans.ADVANCED} planName='Advanced' />
					<PlanCard id={Plans.PRO} planName='Pro' />
				</div>
				{error && (
					<p className='my-1 text-center text-strawberryRed font-medium'>
						Please select a plan
					</p>
				)}
				<PlanSwitcher activePlan={PlanTypes.MONTHLY} />
			</div>
			<FormControls
				submitFormHandler={submitPlanHandler}
				goBackHandler={goBackHandler}
			/>
		</form>
	);
};

export default PlanForm;
