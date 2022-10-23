import './category-item.scss';
import React from 'react'
import {useNavigate} from 'react-router-dom'
function CategoryItem({category}) {
    const {imageUrl,title,route} = category;
    const navigate = useNavigate();

    const onNavigateHandler = () => navigate(route)
  return (
    <div className="categories-container" onClick={onNavigateHandler}
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