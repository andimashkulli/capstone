import React, {useContext} from "react"
import {Link,Outlet} from 'react-router-dom';
import {ReactComponent as Logo} from '../../assets/crown.svg';
import {NavigationContainer,NavLinksContainer,NavLink,LogoContainer} from './navigation.styles.jsx';
import { UserContext } from "../../context/user.context";
import { signOutUser } from "../../utils/firebase/firebase";
import CartIcon from "../../components/cart-icon/cart-icon";
import CartDropdown from "../../components/cart-dropdown/cart-dropdown";
import { CartContext } from "../../context/cart.context";
const Navigation = () => {
const {isCartOpen} = useContext(CartContext)
  const {currentUser} = useContext(UserContext);
const {} = useContext(UserContext)
 
    return(
       <>
       {/* All of this names containers are styled components that are inside of 
       navigation.styles.jsx so styled components are like css in js. */}
    <NavigationContainer> 
  <LogoContainer to="/" className="logo-container">
<Logo className="logo"></Logo>
  </LogoContainer>
  <NavLinksContainer>
<NavLink to="/shop">Shop</NavLink>
{
  currentUser ?(
  <span className="nav-link" onClick={signOutUser}>Sign Out</span>)

  :(
<NavLink className="nav-link" to="/auth">Sign-in</NavLink>
  )
}


<CartIcon/>
</NavLinksContainer>
 { isCartOpen && <CartDropdown/>}
 </NavigationContainer>
       <Outlet/>
       </>
   
    );
 }


 export default Navigation;