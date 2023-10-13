let dummySelectedAddOns = [
	{
		name: 'Online Service',
		price: 12,
	},
	{
		name: 'Customizable Profile',
		price: 15,
	},
];

const ServicesSummary = () => {
	return (
		<div className='p-5 mt-5 mb-3 bg-alabaster rounded-md'>
			<div className='plan-summary flex justify-between items-center pb-3'>
				<div>
					<p className='mb-0 text-[1rem] text-marineBlue font-medium large:text-[1.2rem]'>
						Arcade (Monthly)
					</p>
					<a
						href='#'
						className='outline-none text-sm underline transition-colors duration-300 hover:text-marineBlue hover:decoration-marineBlue focus:text-marineBlue focus:decoration-marineBlue large:text-sm'
					>
						Change
					</a>
				</div>
				<p className='text-marineBlue font-bold'>$9/mo</p>
			</div>
			<ul className='mt-3 text-sm'>
				{dummySelectedAddOns.map((addOn, index) => (
					<li className='flex justify-between items-center mb-3' key={index}>
						<p>{addOn.name}</p>
						<p className='text-marineBlue font-medium'>+${addOn.price}/mo</p>
					</li>
				))}
			</ul>
		</div>
	);
};

export default ServicesSummary;
