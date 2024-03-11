import { CartWidget } from './CartWidget';
import 'bootstrap/dist/css/bootstrap.min.css';
import '@fortawesome/fontawesome-free/css/all.min.css';

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid mx-5 my-0">
					<a className="navbar-brand text-light" href="#">
						Glambit
					</a>
					<button
						className="navbar-toggler bg-light"
						type="button"
						data-bs-toggle="collapse"
						data-bs-target="#navbarText"
						aria-controls="navbarText"
						aria-expanded="false"
						aria-label="Toggle navigation"
					>
						<span className="navbar-toggler-icon"></span>
					</button>
					<div className="collapse navbar-collapse" id="navbarText">
						<ul className="navbar-nav ms-auto mb-2 mb-lg-0">
							<li className="nav-item">
								<a
									className="nav-link text-light"
									aria-current="page"
									href="#"
								>
									Remeras
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Pantalones
								</a>
							</li>
							<li className="nav-item">
								<a className="nav-link text-light" href="#">
									Zapatillas
								</a>
							</li>
						</ul>
						<CartWidget />
					</div>
				</div>
			</nav>
		</>
	);
};
