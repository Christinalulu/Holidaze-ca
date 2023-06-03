import Router from "./routes/Router";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
function App() {
	return (
		<>
			<Navigation />
			<Router />
			<Footer/>
		</>
	);
}

export default App;
