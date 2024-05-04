import { createContext, useState } from 'react';
export const CartContext = createContext();

export const Provider = ({ children }) => {
	const [products, setProducts] = useState([]);

	const clear = () => setProducts([]);
	const removeProduct = (id) => {
		const filtered = products.filter((product) => product.id !== id);
		setProducts(filtered);
	};

	const addProduct = (product, count) => {
		const isExists = products.some((p) => p.id === product.id);
		if (isExists) {
			const updateProducts = products.map((p) => {
				if (p.id === product.id) {
					return {
						...p,
						count: p.count + count,
					};
				} else {
					return p;
				}
			});
			setProducts(updateProducts);
		} else {
			setProducts([...products, { ...product, count }]);
		}
	};

	return (
		<CartContext.Provider
			value={{ addProduct, clear, products, removeProduct }}
		>
			{children}
		</CartContext.Provider>
	);
};
