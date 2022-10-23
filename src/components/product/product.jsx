import React from 'react'
import './product-card.styles.scss';
import { useContext } from 'react';
import Button from '../button/button';
import { CartContext } from '../../context/cart.context';

function ProductCard({product}) {
  const {addItemToCart} = useContext(CartContext)
  const AddProductToCard = () => addItemToCart(product);
    const {imageUrl,name,price} = product
  return (
    <div className='product-card-container'>
        <img className='img' src={imageUrl} alt={`${name}`}/>
        <div className='footer'>
<span className='name'>{name}</span>
<span className='price'>{price}</span>
        </div>
        <Button buttonType='inverted' onClick={AddProductToCard}>Add to Cart</Button>
    </div>
  )
}

export default ProductCard