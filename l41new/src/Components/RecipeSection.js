import "./RecipeSection.css";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
function RecipeSection(props) {
  return (
    <>
      <div id="search-section">
        <h3>Recipes List</h3>
        {props.arr[0] != null ? <SearchBar></SearchBar> : null}
      </div>
      <div id="recipe-list">
        {props.arr.map(function (recipeObj, index) {
          return (
            <Recipe
              key={index}
              recipeInfo={recipeObj}
              delete={props.delete}
            ></Recipe>
          );
        })}
      </div>
      {props.arr[0] == null && <div id="no-recipes">You have no recipes.</div>}
    </>
  );
}
export default RecipeSection;
