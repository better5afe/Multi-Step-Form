import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';

const UserInfoForm = () => {
	const submitInfoHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('User info submitted');
	};

	return (
		<form className='form'>
			<div className='form__input bg-red-100'>
				<StepTitle
					stepTitle='Personal info'
					stepDesc='Please provide your name, email address and phone number.'
				/>
			</div>
			<FormControls submitFormHandler={submitInfoHandler} />
		</form>
	);
};

export default UserInfoForm;
