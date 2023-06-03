import { Route, Routes } from "react-router-dom";
import Landing from "../components/pages/Landing";
import Venues from "../components/pages/Venues";
import Details from "../components/pages/Details";
import Signup from "../components/pages/Signup";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/Login";


function Router() {
	return (
		<>
		
				<Routes>
					<Route
						path='/home'
						element={<Landing />}
					/>
					<Route
						path='/venues'
						element={<Venues />}
					/>
					<Route
						path='/venue/:id'
						element={<Details />}
					/>
					
					<Route
						path='/dashboard'
						element={<Dashboard />}
					/>
					<Route
						path='/signup'
						element={<Signup />}
					/>
					<Route
						path='/login'
						element={<Login />}
					/>
				</Routes>
			
		</>
	);
}

export default Router;
