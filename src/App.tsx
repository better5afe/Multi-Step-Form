import { useSelector } from 'react-redux';
import { AppStateObject } from './models/types';
import FormNavigation from './components/navigation/FormNavigation';
import UserInfoForm from './components/user-info-form/UserInfoForm';
import PlanForm from './components/plan-form/PlanForm';
import AddOnsForm from './components/addons-form/AddOnsForm';
import SummaryForm from './components/summary-form/SummaryForm';
import SuccessPage from './components/success-page/SuccessPage';

const App = () => {
	const step = useSelector((state: AppStateObject) => {
		return state.step.step;
	});

	let formStep;

	switch (step) {
		case 1:
			formStep = <UserInfoForm />;
			break;
		case 2:
			formStep = <PlanForm />;
			break;
		case 3:
			formStep = <AddOnsForm />;
			break;
		case 4:
			formStep = <SummaryForm />;
			break;
		case 5:
			formStep = <SuccessPage />;
			break;
		default:
			break;
	}

	// to be added on success page
	let success = false;

	return (
		<main
			className={`font-sans text-sm large:text-base text-coolGray large:flex large:justify-between ${
				success && 'large:items-center'
			} large:w-[950px] large:p-5 large:bg-white large:rounded-xl large:shadow-lg large:shadow-lightGray`}
		>
			<FormNavigation />
			<div className='large:w-[600px] large:px-12'>{formStep}</div>
		</main>
	);
};

export default App;
