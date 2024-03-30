import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import '@fortawesome/fontawesome-free/css/all.min.css';
import { CartWidget } from './CartWidget';
import { NavLink } from 'react-router-dom';

export const Navbar = () => {
	return (
		<>
			<nav className="navbar navbar-expand-lg bg-dark">
				<div className="container-fluid mx-5 my-0">
					<NavLink className="navbar-brand text-light" to="/">
						Glambit
					</NavLink>
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
								<NavLink
									className="nav-link text-light"
									aria-current="page"
									to="/category/remeras"
									as={NavLink}
								>
									Remeras
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link text-light"
									to="/category/pantalones"
									as={NavLink}
								>
									Pantalones
								</NavLink>
							</li>
							<li className="nav-item">
								<NavLink
									className="nav-link text-light"
									to="/category/zapatillas"
									as={NavLink}
								>
									Zapatillas
								</NavLink>
							</li>
						</ul>
						<CartWidget />
					</div>
				</div>
			</nav>
		</>
	);
};
