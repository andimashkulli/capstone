import React, {useContext} from "react"
import {Link,Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import './navigation.styles.scss';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
const {isCartOpen} = useContext(CartContext)
  const {currentUser} = useContext(UserContext);

 
    return(
       <>
    <div className="navigation">
  <Link to="/" className="logo-container">
<Logo className="logo"></Logo>
  </Link>
  <div className="nav-links-container">
<Link className="nav-link" to="/shop">Shop</Link>
{
  currentUser ?(
  <span className="nav-link" onClick={signOutUser}>Sign Out</span>)
  :(
<Link className="nav-link" to="/auth">Sign-in</Link>
  )
}
<CartIcon/>
  </div>
 { isCartOpen && <CartDropdown/>}
    </div>
       <Outlet/>
       </>
   
    );
 }


 export default Navigation;