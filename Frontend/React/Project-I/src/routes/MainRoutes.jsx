import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import CreateRecipe from '../pages/CreateRecipie'
import SingleRecipe from '../pages/SingleRecipe'

const MainRoutes = () => {
  return (
    <div>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/recipes" element={<Recipes />} />
        <Route path="/recipes/details/:id" element={<SingleRecipe />} />
        <Route path="/createRecipe" element={<CreateRecipe />} />
        <Route path="/about" element={<About />} />
      </Routes>
    </div>
  )
}

export default MainRoutes