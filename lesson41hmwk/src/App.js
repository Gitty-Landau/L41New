import logo from "./logo.svg";
import "./App.css";
import Form from "./Components/Form";
import RecipeSection from "./Components/RecipeSection";
import { useState } from "react";
function App() {
  const [recipeArr, updateRecipeArr] = useState([]);

  function insertRecipe(recipeObj) {
    console.log(recipeObj);
    // const ingredientArr = recipeObj.ingredients.split(",");
    // recipeObj.ingredients = [ingredientArr];
    let newArr = [...recipeArr, recipeObj];
    console.log(newArr);
    updateRecipeArr(newArr);
  }

  return (
    <body>
      <nav>
        <h1>Recipe App</h1>
      </nav>
      <div class="container">
        <div class="left-column">
          <h3>Add Recipe</h3>
          <Form submitHandler={insertRecipe}></Form>
        </div>
        <div class="right-column">
          <RecipeSection arr={recipeArr}></RecipeSection>
        </div>
      </div>
    </body>
  );
}

export default App;
