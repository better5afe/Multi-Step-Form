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
		<Card className='addon-card' isActive={dummyIsActive}>
			<Checkbox isActive={dummyIsActive} />
			<div>
				<p>{addOnName}</p>
				<p>{addOnDesc}</p>
			</div>
			<p>
				+${addOnPrice}/{planType}
			</p>
		</Card>
	);
};

export default AddOnCard;
