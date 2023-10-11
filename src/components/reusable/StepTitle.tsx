import { StepTitleProps } from '../../models/types';

const StepTitle: React.FC<StepTitleProps> = ({
	stepTitle,
	stepDesc,
	addDesc,
}) => {
	return (
		<>
			<h2 className='mb-2 text-2xl text-marineBlue font-bold large:pt-10 large:text-3xl'>
				{stepTitle}
			</h2>
			<p className={`${!addDesc && 'large:pb-6'}`}>{stepDesc}</p>
			{addDesc && <p>{addDesc}</p>}
		</>
	);
};

export default StepTitle;
