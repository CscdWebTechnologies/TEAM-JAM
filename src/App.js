import Bluebar from "./components/Bluebar";
import Getstarted from "./components/GetStarted";
import NavBar from "./components/Navbar";
import Hero from "./components/Hero";
import CoinTable from "./components/CoinTable";
import Earn from "./components/Earn";
import Portfolio from "./components/Portfolio";
import Feature from "./components/Feature"
import Startearning from "./components/Startearning"
import Footer from "./components/Footer";

function App() {
	return (
		<div className="bg-white h-screen">
			<NavBar />
			<Hero />
			<CoinTable />
			<Earn />
			<Portfolio />
			<Feature />
			<Bluebar />
			<Getstarted />
			<Startearning />
			<Footer />
			
		</div>
	);
}

export default App;
