import React, {useContext} from 'react'
import { ProductsContext } from '../../context/product.context'
import ProductCard from '../../components/product/product'
import './products-container.scss'
function Shop() {
const {products} = useContext(ProductsContext)
  return(
    <div className='products-container'>
      {products.map((product) => (
<ProductCard key={product.id} product={product}>

</ProductCard>
))}
    </div>
  )
}
export default Shop



