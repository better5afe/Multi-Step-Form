import { Plans, PlanTypes } from '../../models/types';
import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';
import PlanCard from './PlanCard';
import PlanSwitcher from './PlanSwitcher';

const PlanForm = () => {
	const submitPlanHandler = (event: React.FormEvent) => {
		event.preventDefault()
		console.log('Plan has been submitted');
	};

	const goBackHandler = () => {
		console.log('Go back');
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Select your plan'
					stepDesc='You have the option of monthly or yearly billing.'
				/>
				<div className='my-5 large:flex justify-between'>
					<PlanCard
						id={Plans.ARCADE}
						planName='Arcade'
					
					/>
					<PlanCard
						id={Plans.ADVANCED}
						planName='Advanced'
					
					/>
					<PlanCard
						id={Plans.PRO}
						planName='Pro'
					
					/>
				</div>
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
