import { useSelector, useDispatch } from 'react-redux';
import { selectAddOns } from '../../store/slices/selectedServicesSlice';
import { AddOnCardProps, AppStateObject } from '../../models/types';
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

	const addOns = useSelector(
		(state: AppStateObject) => state.selectedServices.selectedAddOns
	);

	const index = addOns.findIndex((addOn) => addOn.addOnID === id);

	const dispatch = useDispatch();

	const selectAddOnHandler = () => {
		dispatch(
			selectAddOns({
				addOnName: addOnName,
				addOnID: id,
			})
		);
	};

	return (
		<Card
			className='addon-card flex justify-between items-center p-3 mb-3'
			isActive={index !== -1}
			onClick={selectAddOnHandler}
		>
			<div className='flex items-center'>
				<Checkbox isActive={index !== -1} />
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
