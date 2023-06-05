import { Route, Routes } from "react-router-dom";
import Home from "../components/pages/Home";
import Venues from "../components/pages/Venues";
import Details from "../components/pages/Details";
import Dashboard from "../components/pages/Dashboard"
import Signup from "../components/pages/Signup"
import Login from "../components/pages/Login"
import Checkout from "../components/pages/Checkout"

function Router() {
	return (
		<>
		
				<Routes>
					<Route
						path='/'
						element={<Home />}
					/>
					<Route
						path='/venues'
						element={<Venues />}
					/>
					<Route
						path='/details/:id'
						element={<Details />}
					/>
					<Route
						path='/dashborad'
						element={<Dashboard />}
					/>
					<Route
						path='/signup'
						element={<Signup />}
					/>
					<Route
						path='/login'
						element={<Login/>}
					/>
					<Route
						path='/checkout'
						element={<Checkout/>}
					/>
				
				</Routes>
			
		</>
	);
}

export default Router;
