import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateObject } from '../../models/types';
import { setInputValidity } from '../../store/slices/userSlice';
import { setStep } from '../../store/slices/stepSlice';
import StepTitle from '../reusable/StepTitle';
import FormInput from './FormInput';
import FormControls from '../reusable/FormControls';
import { checkForm } from '../../utils/checkForm';
import { UserState } from '../../models/types';

const UserInfoForm = () => {
	const user = useSelector((state: AppStateObject) => state.user);

	const dispatch = useDispatch();

	const nameRef = useRef<HTMLInputElement | null>(null);
	const emailRef = useRef<HTMLInputElement | null>(null);
	const phoneRef = useRef<HTMLInputElement | null>(null);

	const submitInfoHandler = (event: React.FormEvent) => {
		event.preventDefault();
		if (nameRef.current && emailRef.current && phoneRef.current) {
			const nameValidity = checkForm(nameRef.current.value, 'name');
			const emailValidity = checkForm(emailRef.current.value, 'email');
			const phoneValidity = checkForm(phoneRef.current.value, 'phone');

			const formValidity = [nameValidity, emailValidity, phoneValidity];

			formValidity.forEach((input) => {
				dispatch(
					setInputValidity({
						property: input.inputName as keyof UserState,
						isValid: input.isValid,
						errorMessage: input.errorMessage,
					})
				);
			});

			if (formValidity.every((input) => input.isValid)) {
				dispatch(setStep(2));
			} else {
				return;
			}
		}
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Personal info'
					stepDesc='Please provide your name, email address and phone number.'
				/>
				<div className='mt-5'>
					<FormInput
						ref={nameRef}
						id='name'
						inputTitle='Name'
						inputPlaceholder='e.g. Stephen King'
						inputType='text'
						inputValidity={user.name}
					/>
					<FormInput
						ref={emailRef}
						id='email'
						inputTitle='Email Address'
						inputPlaceholder='e.g. stephenking@lorem.com'
						inputType='text'
						inputValidity={user.email}
					/>
					<FormInput
						ref={phoneRef}
						id='phone'
						inputTitle='Phone Number'
						inputPlaceholder='e.g. +1 234 567 890'
						inputType='number'
						inputValidity={user.phone}
					/>
				</div>
			</div>
			<FormControls submitFormHandler={submitInfoHandler} />
		</form>
	);
};

export default UserInfoForm;
