import "./Recipe.css";
import Delete from "./Delete";

function Recipe(props) {
  return (
    <div className="recipe">
      <h3>{props.recipeInfo.title}</h3>
      <ul>
        {props.recipeInfo.ingredients.map(function (ingredient, index) {
          return <li key={index}>{ingredient}</li>;
        })}
      </ul>
      <h3>Method</h3>
      <p>{props.recipeInfo.method}</p>

      <Delete delete={props.delete} num={props.recipeInfo.key}></Delete>
    </div>
  );
}
export default Recipe;
