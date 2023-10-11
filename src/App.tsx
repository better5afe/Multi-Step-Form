import FormNavigation from './components/navigation/FormNavigation';
import UserInfoForm from './components/user-info-form/UserInfoForm';
import PlanForm from './components/plan-form/PlanForm';
import AddOnsForm from './components/addons-form/AddOnsForm';
import SummaryForm from './components/summary-form/SummaryForm';

const App = () => {
	return (
		<main className='font-sans text-sm large:text-base text-coolGray large:flex large:justify-between large:w-[950px] large:p-5 large:bg-alabaster large:rounded-xl large:shadow-lg large:shadow-lightGray'>
			<FormNavigation />
			<div className='large:w-[600px]'>
				{/* <UserInfoForm /> */}
				<PlanForm />
				{/* <AddOnsForm /> */}
				{/* <SummaryForm /> */}
			</div>
		</main>
	);
};

export default App;
