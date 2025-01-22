const getRecipe =()=>{
   
    const recipe = localStorage.getItem('recipe');
    if(recipe){ 
        return JSON.parse(recipe)
    }
    return [];
}


const saveToLocal =(recipes)=>{
    const stringifyRecipes = JSON.stringify(recipes);
    
    localStorage.setItem('recipe',stringifyRecipes)
}

const addToLocal = (recipe)=>{
     const setRecipes = getRecipe();
     setRecipes.push(recipe);
     saveToLocal(setRecipes);
};

const getCurrents = () => {
    const currents = localStorage.getItem('current-recipe');
    if (currents) {
      return JSON.parse(currents);
    }
    return [];
  };
  
const saveCurrents = (currents) => {
    const stringifyCurrents = JSON.stringify(currents);
    localStorage.setItem('current-recipe', stringifyCurrents);
  };
export {addToLocal,getRecipe,saveToLocal,getCurrents,saveCurrents};