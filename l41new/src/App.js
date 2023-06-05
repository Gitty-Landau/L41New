import "./App.css";
import { Post, Get } from "./ApiFunction";
import Form from "./Components/Form";
import RecipeSection from "./Components/RecipeSection";
import { useState, useEffect } from "react";

function App() {
  const [recipeArr, updateRecipeArr] = useState([]);

  useEffect(function () {
    fetchRecipes();
  }, []);

  async function fetchRecipes() {
    const response = await fetch(
      "https://react-fa48e-default-rtdb.firebaseio.com/:Recipe.json"
    );
    const data = await response.json();
    if (data != null) {
      const prevRecipes = Object.values(data);
      prevRecipes.forEach(function (recipe, index) {
        recipe.key = index;
      });
      //updateRecipeArr([...prevRecipes]);
      updateRecipeArr([...prevRecipes]);
    }
  }
  function insertRecipe(recipeObj) {
    let newArr = [...recipeArr, recipeObj];

    updateRecipeArr(newArr);
    Post(
      "https://react-fa48e-default-rtdb.firebaseio.com/:Recipe.json",
      recipeObj
    );
  }
  function DeleteRecipe(key) {
    const newArr = recipeArr.filter((recipe) => recipe.key !== key);
    updateRecipeArr(newArr);
  }

  return (
    <main>
      <nav>
        <h1>Recipe App</h1>
      </nav>
      <div className="container">
        <div className="left-column">
          <h3>Add Recipe</h3>
          <Form submitHandler={insertRecipe}></Form>
        </div>
        <div className="right-column">
          <RecipeSection delete={DeleteRecipe} arr={recipeArr}></RecipeSection>
        </div>
      </div>
    </main>
  );
}

export default App;
