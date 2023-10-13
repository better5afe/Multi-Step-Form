import { useRef } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { AppStateObject } from '../../models/types';
import { setInputValidity } from '../../store/slices/formSlice';
import { setUserData } from '../../store/slices/userDataSlice';
import { setStep } from '../../store/slices/stepSlice';
import StepTitle from '../reusable/StepTitle';
import FormInput from './FormInput';
import FormControls from '../reusable/FormControls';
import { checkForm } from '../../utils/checkForm';
import { FormState, UserState } from '../../models/types';

const UserInfoForm = () => {
	const form = useSelector((state: AppStateObject) => state.form);
	const userData = useSelector((state: AppStateObject) => state.userData);

	console.log(userData);

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
						property: input.inputName as keyof FormState,
						isValid: input.isValid,
						errorMessage: input.errorMessage,
					})
				);
			});

			if (formValidity.every((input) => input.isValid)) {
				const refs = [
					{ property: 'name', value: nameRef.current.value },
					{ property: 'email', value: emailRef.current.value },
					{ property: 'phone', value: phoneRef.current.value },
				];

				refs.forEach((ref) =>
					dispatch(
						setUserData({
							property: ref.property as keyof UserState,
							value: ref.value,
						})
					)
				);

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
						value={userData.name}
						id='name'
						inputTitle='Name'
						inputPlaceholder='e.g. Stephen King'
						inputType='text'
						inputValidity={form.name}
					/>
					<FormInput
						ref={emailRef}
						value={userData.email}
						id='email'
						inputTitle='Email Address'
						inputPlaceholder='e.g. stephenking@lorem.com'
						inputType='text'
						inputValidity={form.email}
					/>
					<FormInput
						ref={phoneRef}
						value={userData.phone}
						id='phone'
						inputTitle='Phone Number'
						inputPlaceholder='e.g. +1 234 567 890'
						inputType='number'
						inputValidity={form.phone}
					/>
				</div>
			</div>
			<FormControls submitFormHandler={submitInfoHandler} />
		</form>
	);
};

export default UserInfoForm;
