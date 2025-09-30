import { Routes, Route } from 'react-router-dom'
import Home from '../pages/Home'
import About from '../pages/About'
import Recipes from '../pages/Recipes'
import CreateRecipe from '../pages/CreateRecipie'

const MainRoutes = () => {
  return (
    <div>
        <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/recipes" element={<Recipes />} />
            <Route path="/about" element={<About />} />
            <Route path="/createRecipe" element={<CreateRecipe />} />
        </Routes>
    </div>
  )
}

export default MainRoutes