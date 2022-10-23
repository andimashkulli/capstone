import React from 'react'
import { useContext } from 'react'
import { CartContext } from '../../context/cart.context'
import CheckoutItem from '../../components/checkout-item/checkout-item'
import './checkout.styles.scss'
function CheckoutPage() {
    const {cartItems,cartTotal} = useContext(CartContext);
  return (
    <>
    <h1>Checkout</h1>
    <div className='checkout-container'>
        <div className='checkout-header'>
            <div className='header-block'>
<span>Product</span>
</div>
<div className='header-block'><span>Description</span></div>
<div className='header-block'><span>Quantity</span></div>
<div className='header-block'><span>Price</span></div>
<div className='header-block'><span>Remove</span></div>

        </div>
   
{cartItems.map(item => <CheckoutItem cartItem={item} key={item.id}/> )}

   <span className='total'>Total: ${cartTotal} </span>
</div>
</>
  )
}

export default CheckoutPage