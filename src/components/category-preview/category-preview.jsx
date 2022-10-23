import React from 'react'
import './category-preview.styles.scss';
import ProductCard from '../product/product';
import { Link } from 'react-router-dom';
import Category from '../../routes/category/category';

function CategoryPreview({title,products}) {
  return (
    <div className='category-preview-container'>
<h2>
    <Link className='categoriesTitle' to={title} >{title.toUpperCase()}</Link>
</h2>

<div className='preview'>
  {
    products
    .filter((_, idx) => idx < 4)
    .map((product) => <ProductCard key={product.id} product={product}/>)
  }
</div>
    </div>
  )
}

export default CategoryPreview