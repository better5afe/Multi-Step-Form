import { CardProps } from '../../models/types';

const Card: React.FC<CardProps> = ({
	className,
	isActive,
	onClick,
	children,
}) => {
	return (
		<div
			tabIndex={0}
			className={`card ${className} p-4 border border-lightGray rounded-lg outline-none cursor-pointer transition-colors duration-300 ${
				isActive && 'card--active'
			} hover:border-marineBlue focus:border-marineBlue`}
			onClick={onClick}
		>
			{children}
		</div>
	);
};

export default Card;
