import { useEffect, useState } from 'react';

import { useParams } from 'react-router-dom';
import data from '../data/products.json';

export const ItemDetailContainer = () => {
	const [product, setProduct] = useState(null);

	const { id } = useParams();

	useEffect(() => {
		const get = new Promise((resolve, reject) => {
			setTimeout(() => resolve(data), 2000);
		});
		get.then((data) => {
			const filter = data.find((p) => p.id === Number(id));
			setProduct(filter);
		});
	}, [id]);

	if (!product) return <div>loading</div>;

	return (
		<div>
			<h1 className="por-ahora">{product.title}</h1>
			<img
				className="card-img-top img-card "
				src={product.pictureUrl}
				alt=""
			/>
		</div>
	);
};
