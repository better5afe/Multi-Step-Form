import StepTitle from '../reusable/StepTitle';
import FormControls from '../reusable/FormControls';
import AddOnCard from './AddOnCard';

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
				<div>
					<AddOnCard
						id='service'
						addOnName='Online Service'
						addOnDesc='Access to multiplayer games'
						addOnPrice='1'
						planType='mo'
					/>
					<AddOnCard
						id='storage'
						addOnName='Larger Storage'
						addOnDesc='Extra 1TB of cloud save'
						addOnPrice='2'
						planType='mo'
					/>
					<AddOnCard
						id='profile'
						addOnName='Customizable Profile'
						addOnDesc='Custom theme on your profile'
						addOnPrice='2'
						planType='mo'
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
