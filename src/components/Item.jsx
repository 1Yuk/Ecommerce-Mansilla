import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';

export const Item = ({ product }) => {
	return (
		<>
			<div className="card w-card">
				<img
					className="card-img-top"
					src={product.pictureUrl}
					alt="..."
				/>
				<div className="card-body">
					<h5 className="card-title">{product.title}</h5>
					<p className="card-text">{product.description}</p>
					<p className="card-text">{product.category}</p>
				</div>
				<Link to={`/item/${product.id}`}>
					<button className="btn btn-primary">Go somewhere</button>
				</Link>
			</div>
		</>
	);
};
