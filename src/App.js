import Home from './routes/home/home'
import {Route,Routes} from 'react-router-dom';
import Navigation from './routes/navigation/navigation';
import './index.scss'
import Authentication from './routes/auth/authentication';
import CheckoutPage from './routes/checkout/checkout-page';
// Outlet mundeson qe kur te fusim elemente mbrenda elementeve si children in parent, atehere outleti e ben qe ajo le te del mas /home/shop ne pjesen larte te web-faqes.

import Shop from './routes/shop/shop';

function App() {

return(
 
 <Routes>
   <Route path="/" element={<Navigation/>}>
      <Route index element={<Home/>}/>
      <Route path='shop/*' element={<Shop/>}/>
      <Route path='auth' element={<Authentication/>}/>
      <Route path='/checkout' element={<CheckoutPage/>}></Route>
   </Route>

</Routes>

);
}

export default App;
