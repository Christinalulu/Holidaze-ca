import { Route, Routes } from "react-router-dom";
import HomePage from "../components/pages/HomePage";
import ProductsPage from "../components/pages/ProductsPage";
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
						element={<HomePage />}
					/> 
				 <Route
						path='/products'
						element={<ProductsPage />}
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
