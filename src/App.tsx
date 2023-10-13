import FormNavigation from './components/navigation/FormNavigation';
// import UserInfoForm from './components/user-info-form/UserInfoForm';
import PlanForm from './components/plan-form/PlanForm';
import AddOnsForm from './components/addons-form/AddOnsForm';
import SummaryForm from './components/summary-form/SummaryForm';
import SuccessPage from './components/success-page/SuccessPage';

const App = () => {
	// to be added on success page
	let success = false;

	return (
		<main
			className={`font-sans text-sm large:text-base text-coolGray large:flex large:justify-between ${
				success && 'large:items-center'
			} large:w-[950px] large:p-5 large:bg-alabaster large:rounded-xl large:shadow-lg large:shadow-lightGray`}
		>
			<FormNavigation />
			<div className='large:w-[600px] large:px-12'>
				{/* <UserInfoForm /> */}
				{/* <PlanForm /> */}
				<AddOnsForm />
				{/* <SummaryForm /> */}
				{/* <SuccessPage /> */}
			</div>
		</main>
	);
};

export default App;
