import { StepTitleProps } from '../../models/types';

const StepTitle: React.FC<StepTitleProps> = ({stepTitle, stepDesc}) => {
	return (
		<>
			<h2>{stepTitle}</h2>
			<p>{stepDesc}</p>
		</>
	);
};

export default StepTitle;
