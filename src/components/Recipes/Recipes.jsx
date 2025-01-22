import { useEffect, useState } from "react";
import PropTypes from "prop-types";
import Recipe from "../Recipe/Recipe";


const Recipes = ({handleWantToCook}) => {
  const [recipes, setRecipes] = useState([]);
  


  useEffect(() => {
    fetch(`recipes.json`)
      .then((res) => res.json())
      .then((data) => setRecipes(data));
  }, []);

  

  return (
    <div>
      
      <div className="grid grid-cols-2 gap-5">
        {recipes.map((recipe) => (
        
          <Recipe key={recipe.id} recipe={recipe} handleWantToCook={handleWantToCook}></Recipe>
          
        ))}
      </div>
    </div>
  );
};

Recipes.propTypes = {
  recipes: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired
};

export default Recipes;
