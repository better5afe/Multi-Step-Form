import { forwardRef } from 'react';
import { FormInputProps } from '../../models/types';

const FormInput: React.ForwardRefRenderFunction<
	HTMLInputElement,
	FormInputProps
> = (
	{ id, defaultValue, inputTitle, inputPlaceholder, inputType, inputValidity },
	ref
) => {
	return (
		<>
			<div className='flex justify-between mb-2 text-xs font-medium large:text-sm'>
				<label htmlFor={id} className=' text-marineBlue'>
					{inputTitle}
				</label>
				{!inputValidity.isValid && (
					<p className='text-strawberryRed'>{inputValidity.errorMessage}</p>
				)}
			</div>
			<input
				ref={ref}
				defaultValue={defaultValue}
				id={id}
				className={`${
					!inputValidity.isValid && 'border-strawberryRed bg-transparent'
				} w-full mb-4 large:mb-5 px-5 py-2 bg-transparent border border-lightGray outline-none rounded-md text-marineBlue placeholder:text-coolGray focus:border-purplishBlue`}
				type={inputType}
				placeholder={inputPlaceholder}
			/>
		</>
	);
};

export default forwardRef(FormInput);
