import "./Form.css";
import { useState } from "react";
function Form(props) {
  const [recipe, updateRecipe] = useState({});

  return (
    <form
      onSubmit={(e) => {
        e.preventDefault();
        props.submitHandler(recipe);
        updateRecipe({ title: "", ingredients: [], method: "" });
      }}
    >
      <label for="recipe-name">Name:</label>
      <input
        value={recipe.title}
        onChange={(e) => {
          const input = e.target.value;
          updateRecipe(function (prev) {
            return { ...prev, title: input };
          });
        }}
        type="text"
        id="recipe-name"
        required
      ></input>
      <br></br>
      <label for="recipe-ingredients">Ingredients:</label>
      <textarea
        value={recipe.ingredients}
        onChange={(e) => {
          const input = e.target.value;
          const inputArr = input.split(",");
          updateRecipe(function (prev) {
            return { ...prev, ingredients: inputArr };
          });
        }}
        id="recipe-ingredients"
        rows="5"
        required
      ></textarea>
      <br></br>
      <label for="recipe-method">Method:</label>
      <textarea
        value={recipe.method}
        onChange={(e) => {
          const input = e.target.value;
          updateRecipe(function (prev) {
            return { ...prev, method: input };
          });
        }}
        id="recipe-method"
        rows="5"
        required
      ></textarea>
      <br></br>
      <button type="submit">Add Recipe</button>
    </form>
  );
}
export default Form;
