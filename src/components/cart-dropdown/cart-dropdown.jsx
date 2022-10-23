import './cart-dropdown.styles.scss'
import Button from '../button/button'
import React from 'react'
import CartItem from '../cart-tem/cart-item'
import {useContext} from 'react';
import { CartContext } from '../../context/cart.context';
import CheckoutPage from '../../routes/checkout/checkout-page';
import { Link } from 'react-router-dom';
function CartDropdown() {
  const {cartItems} = useContext(CartContext)
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
{cartItems.map(item => <CartItem cartItem={item} key={item.id}/> )}

        </div>
       <Link className='button' to="/checkout"> <Button>CHECKOUT</Button></Link>
    </div>
  )
}

export default CartDropdown