import PropTypes from "prop-types";
import { IoTimeOutline } from "react-icons/io5";
import { MdOutlineEnergySavingsLeaf } from "react-icons/md";
const Recipe = ({ recipe,handleWantToCook }) => {
  const {
    recipe_id,
    recipe_name,
    short_description,
    ingredients,
    preparing_time,
    calories,
    recipe_image,
  } = recipe;
  console.log(recipe);
  return (
    <div>
      
      <div className="card bg-base-100 shadow-xl py-3 px-4">
        <div>
          <div > 
            <figure>
              <img className="rounded-2xl" src={recipe_image} alt="Recipe" />
            </figure>
          </div>
        </div>
        <div className="card-body text-start ml-2">
          <div className="min-h-[100px] max-h-[150px]">
            <div className="flex-grow">
              <h2 className="card-title font-medium mt-3 mb-3">
                {recipe_name}
              </h2>
              <p>{short_description}</p>
            </div>
          </div>

          <hr className="mt-3 mb-3" />
          <h2 className="font-medium">Ingredients:{ingredients.length}</h2>
          <div className="ml-2 min-h-[120px] max-h-[180px] mt-3">
            <div className="flex-grow">
              {ingredients.map((ingredient, idx) => (
                <li key={idx}>{ingredient}</li>
              ))}
            </div>
          </div>
          <hr className="mt-3 mb-3" />
          <div className="flex gap-3">
            <div className="flex items-center gap-2">
              <p>
                <IoTimeOutline />
              </p>
              <h3>{preparing_time}</h3>
            </div>
            <div className="flex items-center gap-2">
              <p>
                <MdOutlineEnergySavingsLeaf />
              </p>
              <h3>{calories}</h3>
            </div>
          </div>
          <div className="card-actions mt-5">
            <button onClick={()=>handleWantToCook(recipe,recipe_id)} className="btn bg-green-500 rounded-3xl py-2 px-4 font-medium">
              Want to Cook
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

Recipe.propTypes = {
  recipe: PropTypes.object.isRequired,
  handleWantToCook: PropTypes.func.isRequired
};

export default Recipe;
