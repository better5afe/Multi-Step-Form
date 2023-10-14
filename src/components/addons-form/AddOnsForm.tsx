import { useDispatch } from 'react-redux';
import { setStep } from '../../store/slices/stepSlice';
import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';
import AddOnCard from './AddOnCard';

const AddOnsForm = () => {
	const dispatch = useDispatch();

	const submitAddOnsHandler = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(setStep(4));
	};

	const goBackHandler = () => {
		dispatch(setStep(2));
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Pick add-ons'
					stepDesc='Add-ons help enhance your gaming experience.'
				/>
				<div className='my-5'>
					<AddOnCard
						id='service'
						addOnName='Online Service'
						addOnDesc='Access to multiplayer games'
					/>
					<AddOnCard
						id='storage'
						addOnName='Larger Storage'
						addOnDesc='Extra 1TB of cloud save'
					/>
					<AddOnCard
						id='profile'
						addOnName='Customizable Profile'
						addOnDesc='Custom theme on your profile'
					/>
				</div>
			</div>
			<FormControls
				submitFormHandler={submitAddOnsHandler}
				goBackHandler={goBackHandler}
			/>
		</form>
	);
};

export default AddOnsForm;
