import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import CreateRecipe from '../pages/CreateRecipie'
import SingleRecipe from '../pages/SingleRecipe'
import Fav from '../pages/Fav'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="/about" element={<About />} />
        <Route path='/fav' element={<Fav />} />
        <Route path="*" element={<h1 className='text-3xl font-bold text-center mt-20'>404 Page Not Found!</h1>} />
      </Routes>
    </div>
  )
}

export default MainRoutes