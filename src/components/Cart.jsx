import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import Swal from 'sweetalert2';
import React, { useContext, useState } from 'react';
import { CartContext } from '../contexts/CartContext';
import { collection, getFirestore, addDoc } from 'firebase/firestore';

const initialValue = { name: '', phone: '', email: '' };
export const Cart = () => {
	const [values, setValues] = useState(initialValue);
	const [loading, setLoading] = useState(false);
	const [progress, setProgress] = useState(0);
	const { clear, products, removeProduct } = useContext(CartContext);

	const total = () =>
		products.reduce(
			(acc, product) => acc + product.count * product.price,
			0
		);

	const handleChange = (ev) => {
		setValues((prev) => ({ ...prev, [ev.target.name]: ev.target.value }));
	};
	const handleSubmit = () => {
		setLoading(true);

		const order = { buyer: values, products, total: total() };

		if (!values.name || !values.phone || !values.email) {
			Swal.fire({
				icon: 'error',
				title: 'Oops...',
				text: 'Por favor complete todos los campos del comprador',
			});
			setLoading(false);
			return;
		}

		const db = getFirestore();
		const orderCollection = collection(db, 'orders');
		addDoc(orderCollection, order)
			.then(({ id }) => {
				if (id) {
					let progressValue = 0;
					const interval = setInterval(() => {
						progressValue += 10;
						setProgress(Math.min(progressValue, 100));
						if (progressValue >= 100) {
							clearInterval(interval);
							Swal.fire({
								icon: 'success',
								title: '¡Éxito!',
								text:
									'Su orden: ' + id + ' ha sido completada!',
							});
							setLoading(false);
							clear();
							setValues(initialValue);
						}
					}, 200);
				}
			})
			.catch((error) => {
				console.error('Error adding document: ', error);
				setLoading(false);
			});
	};

	const handleClear = () => clear();
	const handleRemove = (id) => removeProduct(id);

	return (
		<div className="container mt-4">
			<h1 className="text-center mb-4">Productos 🛒</h1>
			{loading && (
				<div className="progress mt-2" style={{ height: '20px' }}>
					<div
						className="progress-bar progress-bar-striped progress-bar-animated"
						role="progressbar"
						aria-valuenow={progress}
						aria-valuemin="0"
						aria-valuemax="100"
						style={{ width: `${progress}%` }}
					></div>
				</div>
			)}
			<table className="table table-striped">
				<thead>
					<tr style={{ textAlign: 'center' }}>
						<th scope="col">Producto</th>
						<th scope="col">Nombre</th>
						<th scope="col">Cantidad</th>
						<th scope="col">Precio</th>
						<th scope="col">Eliminar</th>
					</tr>
				</thead>
				<tbody>
					{products.map((product) => (
						<tr style={{ textAlign: 'center' }} key={product.id}>
							<td>
								<img
									src={product.pictureUrl}
									alt={product.title}
									style={{ width: '50px', height: 'auto' }}
								/>
							</td>
							<td style={{ padding: '20px' }}>{product.title}</td>
							<td style={{ padding: '20px' }}>{product.count}</td>
							<td style={{ padding: '20px' }}>
								${product.price}
							</td>
							<td style={{ padding: '13px' }}>
								<button
									className="btn btn-danger"
									onClick={() => handleRemove(product.id)}
								>
									Eliminar
								</button>
							</td>
						</tr>
					))}
				</tbody>
			</table>
			<div className="text-center font-weight-bold">
				Total: ${total()}
			</div>
			<button
				className="btn btn-primary m-2 mx-auto d-block"
				onClick={handleClear}
			>
				Vaciar carrito
			</button>
			{products?.length > 0 && (
				<form>
					<div className="row mb-3 justify-content-center">
						<div className="col text-center">
							<label className="form-label font-weight-bold">
								Nombre
							</label>
							<input
								type="text"
								className="form-control"
								value={values.name}
								name="name"
								onChange={handleChange}
							/>
						</div>
						<div className="col text-center">
							<label className="form-label font-weight-bold">
								Celular
							</label>
							<input
								type="tel"
								className="form-control"
								value={values.phone}
								name="phone"
								onChange={handleChange}
							/>
						</div>
						<div className="col text-center">
							<label className="form-label font-weight-bold">
								Email
							</label>
							<input
								type="email"
								className="form-control"
								value={values.email}
								name="email"
								onChange={handleChange}
							/>
						</div>
					</div>
					<button
						className="btn btn-success mx-auto d-block"
						type="button"
						onClick={handleSubmit}
					>
						Enviar
					</button>
				</form>
			)}
		</div>
	);
};
