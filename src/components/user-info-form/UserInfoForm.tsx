import StepTitle from '../reusable/StepTitle';
import FormInput from './FormInput';
import FormControls from '../reusable/FormControls';

const UserInfoForm = () => {
	const submitInfoHandler = (event: React.FormEvent) => {
		event.preventDefault();
		console.log('User info submitted');
	};

	return (
		<form className='form'>
			<div className='form__input bg-alabaster'>
				<StepTitle
					stepTitle='Personal info'
					stepDesc='Please provide your name, email address and phone number.'
				/>
				<div className='mt-5'>
					<FormInput
						id='name'
						inputTitle='Name'
						inputPlaceholder='e.g. Stephen King'
						inputType='text'
					/>
					<FormInput
						id='email'
						inputTitle='Email Address'
						inputPlaceholder='e.g. stephenking@lorem.com'
						inputType='text'
					/>
					<FormInput
						id='phone'
						inputTitle='Phone Number'
						inputPlaceholder='e.g. +1 234 567 890'
						inputType='number'
					/>
				</div>
			</div>
			<FormControls submitFormHandler={submitInfoHandler} />
		</form>
	);
};

export default UserInfoForm;
