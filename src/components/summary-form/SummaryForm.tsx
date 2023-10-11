import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';

const SummaryForm = () => {
	const submitSummaryHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Summary has been submitted');
	};

	const goBackHandler = () => {
		console.log('Go back');
	};

	return (
		<form className='form'>
			<div className='form__input bg-red-100'>
				<StepTitle
					stepTitle='Finishing up'
					stepDesc='Double check everything looks OK before confirming.'
				/>
			</div>
			<FormControls
				submitFormHandler={submitSummaryHandler}
				goBackHandler={goBackHandler}
			/>
		</form>
	);
};

export default SummaryForm;
