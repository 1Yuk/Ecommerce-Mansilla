import { ItemCount } from './ItemCount';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const ItemDetail = ({ product }) => {
	const { addProduct } = useContext(CartContext);
	const add = (count) => {
		addProduct(product, count);
	};

	return (
		<>
			<div className="container mt-5 contentCenter">
				<div className="row">
					<div className="col-md-6">
						<img
							className="card-img-top img-card"
							src={product.pictureUrl}
							alt="Product"
						/>
					</div>
					<div className="col-md-6">
						<div className="rectangle">
							<h1>{product.title}</h1>
							<p>{product.description}</p>
							<div className="productStock">{`Stock: ${product.stock}`}</div>
							<div className="productStock">{`Price: ${product.price}`}</div>
							<ItemCount stock={product.stock} onAdd={add} />
						</div>
					</div>
				</div>
			</div>
		</>
	);
};
