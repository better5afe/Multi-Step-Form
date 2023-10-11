import NavLink from './NavLink';

const navLinks = [
	{
		stepNumber: 1,
		stepTitle: 'your info',
	},
	{
		stepNumber: 2,
		stepTitle: 'select plan',
	},
	{
		stepNumber: 3,
		stepTitle: 'add-ons',
	},
	{
		stepNumber: 4,
		stepTitle: 'summary',
	},
];

const FormNavigation = () => {
	return (
		<nav className='nav h-[172px] large:h-[568px] large:w-[274px] large:p-6'>
			<ul className='flex justify-between h-full w-[50vw] mx-auto  pt-8 sm:justify-evenly large:block large:h-auto large:w-auto large:mx-0 large:pt-0'>
				{navLinks.map((navLink) => (
					<NavLink
						key={navLink.stepNumber}
						stepNumber={navLink.stepNumber}
						stepTitle={navLink.stepTitle}
					/>
				))}
			</ul>
		</nav>
	);
};

export default FormNavigation;
