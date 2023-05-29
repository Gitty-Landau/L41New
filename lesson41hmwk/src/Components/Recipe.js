import "./Recipe.css";

function Recipe(props) {
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
    </div>
  );
}
export default Recipe;
