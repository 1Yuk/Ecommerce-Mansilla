import { useEffect, useState } from 'react';
import { ItemList } from './ItemList';
import { useParams } from 'react-router-dom';
import {
	getFirestore,
	getDocs,
	collection,
	query,
	where,
} from 'firebase/firestore';

export const ItemListContainer = () => {
	const [products, setProducts] = useState([]);

	const { id } = useParams();
	useEffect(() => {
		const db = getFirestore();
		let refCollection;

		if (!id) {
			refCollection = collection(db, 'products');
		} else {
			refCollection = query(
				collection(db, 'products'),
				where('category', '==', id)
			);
		}
		getDocs(refCollection).then((snapshot) => {
			setProducts(
				snapshot.docs.map((doc) => {
					return { id: doc.id, ...doc.data() };
				})
			);
		});
	}, [id]);

	return (
		<div>
			<ItemList products={products} />
		</div>
	);
};
