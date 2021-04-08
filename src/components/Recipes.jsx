import React from 'react'
import {useState} from 'react'

const elvenShieldRecipe = {
  leatherStrips: 12,
  ironIngot: 1,
  refineMoonstone: 112
}

const elventGauntletsRecipe = {
  ...elvenShieldRecipe,
  ironIngot: 5
}

const Recipes = () => {

  let [recipe, setRecipe] = useState({})

  return (
    <div>
      <h3>Currrent Recipe</h3>
      <button onClick={ ()=> setRecipe(elvenShieldRecipe)}>
        ElvenShieldRecipe
      </button>
      <button onClick={ ()=> setRecipe(elventGauntletsRecipe)}>
        ElvenGauntletsRecipe
      </button>
      {/* <h2>${recipe}</h2> */}
      <ul>
        {Object.keys(elvenShieldRecipe).map( (material) => (
          <li key={material}>
            {material}: {recipe[material]}
          </li>
          )
        )}
      </ul>
    </div>
  )
}

export default Recipes

