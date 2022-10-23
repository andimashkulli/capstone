import './category.scss';
import { useContext, useState, useEffect } from 'react';
import { useParams } from 'react-router-dom';
import { CategoriesContext } from '../../context/categories.context';
import ProductCard from '../../components/product/product';
import React from 'react'

function Category() {
    const {category} = useParams(); // useParams hook mudeson ta marrim parametrin orej routes-ave pra nese kemi si psh :type atehere kete type nga url e marrim permes useParams hook.
    const {categoriesMap} = useContext(CategoriesContext)
    const [products,setProducts] = useState(categoriesMap[category]);
    useEffect(() => {
setProducts(categoriesMap[category])
    }, [category,categoriesMap])
  return (
    <>
    <h2 className='title'>{category.toUpperCase()}</h2>
    <div className='category-container'>
     
        {products &&
            products.map((product) => <ProductCard key={product.id} product={product}/>)
        }
    </div>
    </>
  )
}

export default Category