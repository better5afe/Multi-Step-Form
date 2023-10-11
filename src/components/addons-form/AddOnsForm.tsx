import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';

const AddOnsForm = () => {
	const submitAddOnsHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('Add Ons have been submitted');
	};

	const goBackHandler = () => {
		console.log('Go Back');
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Pick add-ons'
					stepDesc='Add-ons help enhance your gaming experience.'
				/>
			</div>
			<FormControls
				submitFormHandler={submitAddOnsHandler}
				goBackHandler={goBackHandler}
			/>
		</form>
	);
};

export default AddOnsForm;
