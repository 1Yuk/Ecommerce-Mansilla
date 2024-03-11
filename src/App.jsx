import './App.css';
import { Navbar } from './compenents/Navbar';
import { ItemListContainer } from './compenents/ItemListContainer';

function App() {
	return (
		<>
			<Navbar />
			<ItemListContainer subtitle="Tienda de Ropa" />
		</>
	);
}

export default App;
