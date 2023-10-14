import { useDispatch } from 'react-redux';
import { setStep } from '../../store/slices/stepSlice';
import StepTitle from '../reusable/StepTitle';
import ServicesSummary from './ServicesSummary';
import TotalSummary from './TotalSummary';
import FormControls from '../reusable/FormControls';

const SummaryForm = () => {
	const dispatch = useDispatch();

	const submitSummaryHandler = (event: React.FormEvent) => {
		event.preventDefault();
		dispatch(setStep(5));
	};

	const goBackHandler = () => {
		dispatch(setStep(3));
	};

	return (
		<form className='form'>
			<div className='form__input'>
				<StepTitle
					stepTitle='Finishing up'
					stepDesc='Double check everything looks OK before confirming.'
				/>
				<div>
					<ServicesSummary />
					<TotalSummary />
				</div>
			</div>
			<FormControls
				submitFormHandler={submitSummaryHandler}
				goBackHandler={goBackHandler}
				confirm={true}
			/>
		</form>
	);
};

export default SummaryForm;
