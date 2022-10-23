import {Routes,Route} from 'react-router-dom'
import './products-container.scss';
import CategoriesPreview from '../category-preview/categories-preview'
import Category from '../category/category';
function Shop() {

  return(
<Routes>
  <Route index element={<CategoriesPreview/>}></Route>
  <Route path=':category' element={<Category/>}></Route>
</Routes>
  )
}
export default Shop



