import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';
import { Provider } from './contexts/CartContext';
import { Cart } from './components/Cart';

function App() {
	return (
		<Provider>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/category/:id"
						element={<ItemListContainer />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
					<Route path="/cart" element={<Cart />} />
				</Routes>
			</BrowserRouter>
		</Provider>
	);
}

export default App;
