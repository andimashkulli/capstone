import './cart-dropdown.styles.scss'
import Button from '../button/button'
import React from 'react'

function CartDropdown() {
  return (
    <div className='cart-dropdown-container'>
        <div className='cart-items'>
<Button>CHECKOUT</Button>
        </div>
    </div>
  )
}

export default CartDropdown