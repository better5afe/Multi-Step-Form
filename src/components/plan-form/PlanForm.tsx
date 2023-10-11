import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';

const PlanForm = () => {
	const submitPlanHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Plan has been submitted');
	};

	const goBackHandler = () => {
		console.log('Go back');
	};

	return (
		<form className='form'>
			<div className='form__input bg-red-100'>
				<StepTitle
					stepTitle='Select your plan'
					stepDesc='You have the option of monthly or yearly billing.'
				/>
			</div>
			<FormControls
				submitFormHandler={submitPlanHandler}
				goBackHandler={goBackHandler}
			/>
		</form>
	);
};

export default PlanForm;
