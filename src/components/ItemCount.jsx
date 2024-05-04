import { useState } from 'react';
export const ItemCount = ({ onAdd, stock }) => {
	const [count, SetCount] = useState(1);
	const handleDecrease = () => {
		if (count > 1) SetCount((prev) => prev - 1);
	};
	const handleIncrease = () => {
		if (stock > count) SetCount((prev) => prev + 1);
	};
	const handleAdd = () => {
		onAdd(count);
		SetCount(1);
	};
	return (
		<div className="d-flex align-items-center">
			<button
				className="btn btn-sm btn-secondary"
				onClick={handleDecrease}
			>
				-
			</button>
			<input
				type="number"
				className="form-control mx-2"
				value={count}
				readOnly
			/>
			<button
				className="btn btn-sm btn-secondary"
				onClick={handleIncrease}
			>
				+
			</button>
			<button
				type="button"
				className="btn btn-primary ms-3"
				onClick={handleAdd}
			>
				Agregar al carrito
			</button>
		</div>
	);
};
