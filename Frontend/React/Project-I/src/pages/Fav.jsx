import RecipeCard from '../components/RecipeCard';


const Fav = () => {

  const favData = JSON.parse(localStorage.getItem("fav") || []);

  const reRender = favData.map((data) => (
    <RecipeCard key={data.id} recipe ={data}/>
  ))

  return (
    <div className='flex flex-row gap-7 flex-wrap justify-around h-screen'>
      {favData.length > 0 ? reRender : "No Favorite found!"}
    </div>
  )
}

export default Fav