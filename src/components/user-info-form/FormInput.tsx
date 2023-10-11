import { FormInputProps } from '../../models/types';

const FormInput: React.FC<FormInputProps> = ({
	id,
	inputTitle,
	inputPlaceholder,
	inputType,
}) => {
	let isError = false;

	return (
		<>
			<div className='flex justify-between mb-2 text-xs font-medium large:text-sm'>
				<label htmlFor={id} className=' text-marineBlue'>
					{inputTitle}
				</label>
				{isError && (
					<p className='text-strawberryRed'>This field is required</p>
				)}
			</div>
			<input
				id={id}
				className={`${
					isError && 'border-strawberryRed'
				} w-full mb-4 large:mb-5 px-5 py-2 bg-transparent border border-lightGray outline-none rounded-md text-marineBlue placeholder:text-coolGray focus:border-purplishBlue`}
				type={inputType}
				placeholder={inputPlaceholder}
			/>
		</>
	);
};

export default FormInput;
