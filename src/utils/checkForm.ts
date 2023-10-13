const emailRegExp = /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/;

export const checkForm = (inputValue: string, inputName: string) => {
	let error = {
		inputName: inputName,
		isValid: false,
		errorMessage: '',
	};

	if (inputValue.trim().length === 0) {
		error = {
			inputName: inputName,
			isValid: false,
			errorMessage: 'This field is required',
		};

		return error;
	}

	if (inputValue.trim().length > 0 && inputName === 'email') {
		const emailValidity = emailRegExp.test(inputValue);

		if (!emailValidity) {
			error = {
				inputName: inputName,
				isValid: false,
				errorMessage: 'Invalid email address',
			};

			return error;
		}
	}

	error = {
		inputName: inputName,
		isValid: true,
		errorMessage: '',
	};

	return error;
};
