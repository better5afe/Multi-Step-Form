import { CheckboxProps } from '../../models/types';

const Checkbox: React.FC<CheckboxProps> = ({ isActive }) => {
	return (
		<div
			className={`w-4 h-4 border border-lightGray rounded-sm ${
				isActive &&
				'flex justify-center items-center bg-purplishBlue border-purplishBlue'
			}`}
		>
			{isActive && (
				<svg
					xmlns='http://www.w3.org/2000/svg'
					width='12'
					height='9'
					viewBox='0 0 12 9'
				>
					<path
						fill='none'
						stroke='#FFF'
						strokeWidth='2'
						d='m1 4 3.433 3.433L10.866 1'
					/>
				</svg>
			)}
		</div>
	);
};

export default Checkbox;
