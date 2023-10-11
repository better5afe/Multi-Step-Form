import { ButtonProps } from '../../models/types';

const Button: React.FC<ButtonProps> = ({ btnText, type, onClick }) => {
	return (
		<button type={type} onClick={onClick}>
			{btnText}
		</button>
	);
};

export default Button;
