import 'bootstrap/dist/css/bootstrap.min.css';
import { Link } from 'react-router-dom';
export const Item = ({ product }) => {
	return (
		<>
			<div style={{ width: '14rem', height: '100%' }} className="card">
				<img
					className="card-img-top"
					src={product.pictureUrl}
					alt="..."
					style={{ height: '200px' }}
				/>
				<div
					className="card-body d-flex flex-column justify-content-between"
					style={{ height: '320px' }}
				>
					<div>
						<h5 className="card-title text-center">
							{product.title}
						</h5>
						<p
							className="card-text"
							style={{
								maxHeight: '11rem',
								fontSize: '13px',
								textAlign: 'center',
							}}
						>
							{product.description}
						</p>
					</div>
					<div className="d-flex justify-content-center align-items-center flex-column">
						<p className="card-text fw-bold text-uppercase">
							{product.category}
						</p>
						<Link to={`/item/${product.id}`}>
							<button className="btn btn-primary">
								Ver producto
							</button>
						</Link>
					</div>
				</div>
			</div>
		</>
	);
};
