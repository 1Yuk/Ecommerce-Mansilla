import { NavLink } from 'react-router-dom';
import { useContext } from 'react';
import { CartContext } from '../contexts/CartContext';

export const CartWidget = () => {
	const { products } = useContext(CartContext);
	const total = products.reduce((acc, elem) => acc + elem.count, 0);

	return (
		<NavLink to="/cart">
			<span className="navbar-text text-light">
				<i className="fas fa-shopping-cart"></i>
				<span className="badge bg-light rounded-circle text-dark position-absolute translate-middle">
					{total}
				</span>
			</span>
		</NavLink>
	);
};
