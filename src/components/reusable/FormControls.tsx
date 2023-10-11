import { FormControlsProps } from '../../models/types';
import Button from './Button';

const FormControls: React.FC<FormControlsProps> = ({
	submitFormHandler,
	goBackHandler,
}) => {
	return (
		<div>
			<Button btnText='Next Step' type='submit' onClick={submitFormHandler} />
			{goBackHandler  && <Button btnText='Go Back' type='button' onClick={goBackHandler} />}
		</div>
	);
};

export default FormControls;
