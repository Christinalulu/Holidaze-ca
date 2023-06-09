import Router from "./Router/Route";
import Navigation from "./components/shared/Navigation";
import Footer from "./components/shared/Footer";
import Loader from "./components/shared/Loader";
import { useSelector } from "react-redux";

function App() {
	const {isLoading} = useSelector(state => state.loader)
	return (
		<>
	
			<Navigation />
			<Router />
			<Footer />
			{isLoading && <Loader/>}
		</>
	);
}

export default App;
