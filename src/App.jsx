import {useEffect, useState } from "react";
import "./App.css";
import Banner from "./components/Banner/Banner";
import Cooking from "./components/Cooking/Cooking";
import Navbar from "./components/Navbar/Navbar";
import Recipes from "./components/Recipes/Recipes";
import Description from "./Description";
import { addToLocal, getCurrents, getRecipe, saveCurrents, saveToLocal } from "./local";
import { ToastContainer, toast } from 'react-toastify';

function App() {

  const [cooks, setCooks] = useState([]);
  const [currents, setCurrents] = useState([]);

  useEffect(() => {
   
    const savedCooks = getRecipe();
    const savedCurrents = getCurrents();
    
    setCooks(savedCooks)
    setCurrents(savedCurrents);

  }, []);


  const handleWantToCook = (recipe, id) => {
    const wantCook = [...cooks, recipe];
    const alreadyExits = cooks.find(cook=>cook.recipe_id === id);
    if(alreadyExits){
      toast('Already in list')
    }
    else{
      setCooks(wantCook);
      addToLocal(recipe);
    }
  };

 
  const handlePreparing = (currentRecipe, id) => {
    
    const updatedCooks = cooks.filter((cook) => cook.recipe_id !== id);
    const updatedCurrents = [...currents, currentRecipe];

    setCooks(updatedCooks);
    saveToLocal(updatedCooks);

    setCurrents(updatedCurrents);
    saveCurrents(updatedCurrents);
  };
  
  return (
    <>
      <Navbar></Navbar>
      <Banner></Banner>
      <Description></Description>
      <div className="grid grid-cols-3 mx-20 gap-8 mb-5">
        <div className="col-span-2">
          <Recipes handleWantToCook={handleWantToCook}></Recipes>
        </div>
        <Cooking  cooks={cooks} handlePreparing={handlePreparing} currents={currents}></Cooking>
      </div>

      <ToastContainer></ToastContainer>
    </>
  );
}

export default App;
