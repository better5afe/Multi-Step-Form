import { StepTitleProps } from '../../models/types';

const StepTitle: React.FC<StepTitleProps> = ({ stepTitle, stepDesc }) => {
	return (
		<>
			<h2 className='mb-2 text-xl text-marineBlue font-bold large:text-3xl'>{stepTitle}</h2>
			<p>{stepDesc}</p>
		</>
	);
};

export default StepTitle;
