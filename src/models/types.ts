// Navigation

export interface NavLinkProps {
	stepNumber: number;
	stepTitle: string;
}

// reusable

export interface StepTitleProps {
	stepTitle: string;
	stepDesc: string;
}

export interface FormControlsProps {
	submitFormHandler: (event: React.FormEvent) => void;
	goBackHandler?: () => void;
	confirm?: boolean;
}

export interface ButtonProps {
	btnText: string;
	type: 'submit' | 'button';
	onClick: ((event: React.FormEvent) => void) | (() => void);
}
