import {Route, Routes} from 'react-router-dom';
import Landing from '../components/pages/Landing';
import Home from '../components/pages/Home';
import Details from '../components/pages/Details';

function Router (){

   return (
      <>
      <Routes>

         <Route path='/' element={<Landing/>}/>
         <Route path='/home' element={<Home/>}/>
         <Route path='/product/:id' element={<Details/>}/>

      </Routes>
      
      
      </>
   )
}

export default Router;
