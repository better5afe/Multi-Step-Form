import { AddOnCardProps } from '../../models/types';
import Card from '../reusable/Card';
import Checkbox from '../reusable/Checkbox';

const AddOnCard: React.FC<AddOnCardProps> = ({
	id,
	addOnName,
	addOnDesc,
	addOnPrice,
	planType,
}) => {
	let dummyIsActive = true;
	return (
		<Card
			className='addon-card flex justify-between items-center p-3 mb-3'
			isActive={dummyIsActive}
		>
			<div className='flex items-center'>
				<Checkbox isActive={dummyIsActive} />
				<div className='ms-4'>
					<p className='text-marineBlue font-medium'>{addOnName}</p>
					<p className='text-xs large:text-sm'>{addOnDesc}</p>
				</div>
			</div>
			<p className='text-sm text-purplishBlue'>
				+${addOnPrice}/{planType}
			</p>
		</Card>
	);
};

export default AddOnCard;
