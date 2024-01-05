import './App.css';
import Navbar from '../src/components/layout/Navbar/Navbar.jsx';
import { Outlet } from 'react-router-dom';

const App = () => {

	return (
		<div className='App sm:overflow-x-hidden '>
			<Navbar />
			<Outlet />
   
		</div>
	);
};

export default App;
//YX123'+Âag