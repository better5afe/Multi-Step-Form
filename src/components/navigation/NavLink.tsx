import { NavLinkProps } from '../../models/types';

// class to be added on active - active-step

const NavLink: React.FC<NavLinkProps> = ({ stepNumber, stepTitle }) => {
	return (
		<li className='nav-link uppercase cursor-pointer large:flex items-center large:mb-5'>
			<div
				tabIndex={0}
				className='nav-link__step flex justify-center items-center h-[35px] w-[35px] border border-white rounded-full outline-none text-white font-medium transition-colors duration-300'
			>
				{stepNumber}
			</div>
			<div className='hidden large:flex large:flex-col large:ms-4'>
				<p className='text-xs text-lightGray opacity-50 large:text-sm'>Step {stepNumber}</p>
				<p className='text-white font-medium tracking-wider'>{stepTitle}</p>
			</div>
		</li>
	);
};

export default NavLink;
