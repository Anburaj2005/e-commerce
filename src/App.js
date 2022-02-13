//import './App.css';
import Homepage from './pages/Homepage';
import {BrowserRouter,Route, Routes} from 'react-router-dom'
import Loginpage from './pages/Loginpage';
import Registerpage from './pages/Registerpage';
import ProductInfo from './pages/ProductInfo';
import Cartpage from './pages/Cartpage';
import './stylesheets/Layout.css';
import './stylesheets/products.css';

function App() {
  return ( 
    <div className="App">
      <BrowserRouter>
<Routes>
  <Route path ='/' excat element={<Homepage/>}/>       
  <Route path ='/Login' excat element={<Loginpage/>}/>
  <Route path ='/Register' excat element={<Registerpage/>}/>
  <Route path ='/Productinfo' excat element={<ProductInfo/>}/>
  <Route path ='/Cart' excat element={<Cartpage/>}/>


</Routes>

</BrowserRouter>
  

    </div>
  );
}

export default App;
