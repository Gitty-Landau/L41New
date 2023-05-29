import "./RecipeSection.css";
import Recipe from "./Recipe";
import SearchBar from "./SearchBar";
function RecipeSection(props) {
  return (
    <>
      <div id="search-section">
        <h3>Recipes List</h3>
        {props.arr[0] != null ? (
          <SearchBar filterFunction={props.filterFunction}></SearchBar>
        ) : null}
      </div>
      <div id="recipe-list">
        {props.arr.map(function (recipeObj) {
          console.log(recipeObj);
          return <Recipe recipeInfo={recipeObj}></Recipe>;
        })}
      </div>
      {props.arr[0] == null && <div id="no-recipes">You have no recipes.</div>}
    </>
  );
}
export default RecipeSection;
