import './App.css';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Navbar } from './components/Navbar';
import { ItemListContainer } from './components/ItemListContainer';
import { ItemDetailContainer } from './components/ItemDetailContainer';

function App() {
	return (
		<>
			<BrowserRouter>
				<Navbar />
				<Routes>
					<Route path="/" element={<ItemListContainer />} />
					<Route
						path="/category/:id"
						element={<ItemListContainer />}
					/>
					<Route path="/item/:id" element={<ItemDetailContainer />} />
				</Routes>
			</BrowserRouter>
		</>
	);
}

export default App;
