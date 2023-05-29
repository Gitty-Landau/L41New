import "./Recipe.css";
import Delete from "./Delete";

function Recipe(props) {
  console.log("key " + props.recipeInfo.key);
  return (
    <div class="recipe">
      <h3>{props.recipeInfo.title}</h3>
      <ul>
        {props.recipeInfo.ingredients.map(function (ingredient) {
          return <li>{ingredient}</li>;
        })}
      </ul>
      <h3>Method</h3>
      <p>{props.recipeInfo.method}</p>

      <Delete delete={props.delete} num={props.recipeInfo.key}></Delete>
    </div>
  );
}
export default Recipe;
