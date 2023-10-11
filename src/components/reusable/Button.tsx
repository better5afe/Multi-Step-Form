import { ButtonProps } from '../../models/types';

const Button: React.FC<ButtonProps> = ({ btnText, type, onClick }) => {
	let btnClass =
		'ms-auto bg-marineBlue text-white hover:bg-purplishBlue focus:bg-purplishBlue';

	if (type === 'button') {
		btnClass = 'hover:text-marineBlue focus:text-marineBlue';
	}

	if (btnText === 'Confirm') {
		btnClass =
			'bg-purplishBlue text-white hover:bg-pastelBlue focus:bg-pastelBlue';
	}

	return (
		<button
			className={`px-4 py-3 rounded-md outline-none font-medium transition-colors duration-300 ${btnClass}`}
			type={type}
			onClick={onClick}
		>
			{btnText}
		</button>
	);
};

export default Button;
