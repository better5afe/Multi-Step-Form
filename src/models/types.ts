// reusable

export interface StepTitleProps {
	stepTitle: string;
	stepDesc: string;
	addDesc?: string;
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

export interface CardProps {
	className: string;
	isActive: boolean;
	onClick: () => void;
	children: React.ReactNode;
}

export interface CheckboxProps {
	isActive: boolean;
}

// Navigation

export interface NavLinkProps {
	stepNumber: number;
	stepTitle: string;
}

// User info form

export interface FormInputProps {
	id: string;
	defaultValue: string;
	inputTitle: string;
	inputPlaceholder: string;
	inputType: 'number' | 'text';
	inputValidity: Input;
}

// Plan form

export enum Plans {
	ARCADE = 'arcade',
	ADVANCED = 'advanced',
	PRO = 'pro',
}

export enum PlanTypes {
	MONTHLY = 'mo',
	YEARLY = 'yo',
}

export interface PlanCardProps {
	id: string;
	planName: string;
}

export interface PlanSwitcherProps {
	activePlan: PlanTypes.MONTHLY | PlanTypes.YEARLY;
}

// Addons form

export interface AddOnCardProps {
	id: string;
	addOnName: string;
	addOnDesc: string;
}

// redux - form slice

interface Input {
	isValid: boolean;
	errorMessage: string;
}

export interface FormState {
	name: Input;
	email: Input;
	phone: Input;
}

export interface FormAction {
	property: keyof FormState;
	isValid: boolean;
	errorMessage: string;
}

// redux - user slice

export interface UserState {
	name: string;
	email: string;
	phone: string;
}

export interface UserAction {
	property: keyof UserState;
	value: string;
}

// selected services

interface SelectedAddOn {
	addOnID: string;
	addOnName: string;
}

export interface Prices {
	advanced: number;
	arcade: number;
	pro: number;
	service: number;
	storage: number;
	profile: number;
}

export interface SelectedServicesState {
	selectedPlan: string;
	selectedPlanID: string;
	selectedAddOns: SelectedAddOn[];
	selectedPrices: Prices;
	selectedPlanType: 'mo' | 'yr';
}

// redux

export interface AppStateObject {
	step: {
		step: number;
	};
	form: {
		name: Input;
		email: Input;
		phone: Input;
	};
	userData: UserState;
	selectedServices: SelectedServicesState;
}
