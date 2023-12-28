import { Outlet } from 'react-router-dom';
import FAQ from '../../components/layout/FAQ/Faq';
import Header from '../../components/layout/Header/Header';
import HowItWorks from '../../components/layout/HowItWorks/HowItWorks';
import Navbar from '../../components/layout/Navbar/Navbar';

export default function Home() {
	return (
		<div>
			<Header />
			<HowItWorks />
			<FAQ />
		</div>
	);
}
