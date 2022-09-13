import './category-item.scss';
import React from 'react'

function CategoryItem({category}) {
    const {imageUrl,title} = category;
  return (
    <div className="categories-container"  
     style={{backgroundImage:`url(${imageUrl})`}}>
      {/* <img></img> */}
      <div className="category-body-container">
        <h2>{title}</h2>
        <p> Shop now</p>
        </div>
      </div>
  )
}

export default CategoryItem