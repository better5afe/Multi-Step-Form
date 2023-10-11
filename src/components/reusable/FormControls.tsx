import { FormControlsProps } from '../../models/types';
import Button from './Button';

const FormControls: React.FC<FormControlsProps> = ({
	submitFormHandler,
	goBackHandler,
	confirm,
}) => {
	let text = 'Next Step';

	if (confirm) {
		text = 'Confirm';
	}

	return (
		<div className='fixed right-0 bottom-0 left-0 flex justify-between p-3 bg-alabaster large:absolute large:bottom-[40px] large:p-0'>
			{goBackHandler && (
				<Button btnText='Go Back' type='button' onClick={goBackHandler} />
			)}
			<Button btnText={text} type='submit' onClick={submitFormHandler} />
		</div>
	);
};

export default FormControls;
