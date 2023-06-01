import { Route, Routes } from "react-router-dom";
import Landing from "../components/pages/Landing";
import Home from "../components/pages/Home";
import Details from "../components/pages/Details";
import Signup from "../components/pages/Signup";
import Dashboard from "../components/pages/Dashboard";
import Login from "../components/pages/Login";


function Router() {
	return (
		<>
		
				<Routes>
					<Route
						path='/'
						element={<Landing />}
					/>
					<Route
						path='/home'
						element={<Home />}
					/>
					<Route
						path='/product/:id'
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
