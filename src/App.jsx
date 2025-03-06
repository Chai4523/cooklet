import { useState } from "react";
import "./App.css";
import * as api from "./APIUtils";

function App() {
  const [keyword, setKeyword] = useState(null);
  const [diet, setDiet] = useState(null);
  const [exclude, setExclude] = useState(null);
  const [response, setResponse] = useState(null);
  const [loading, setLoading] = useState(null);

  const getRecipe = async () => {
    try {
      const queryDiet = diet || "" ;
      const queryExclude = exclude ||  "" ;

      const query = {
        keyword,
        diet: queryDiet,
        exclude: queryExclude,
      };

      setLoading(true)
      const res = await api.searchRecipe(query);
      setLoading(false)
      setResponse(res.results);
    } catch (error) {
      setLoading(false)
      console.error(error);
    }
  };

  return (
    <div>
      <h1 className="title">Recipe Search</h1>
      <h2 className="subtitle">Search recipes from all over the world.</h2>

      <form
        className="form"
        onSubmit={(e) => {
          getRecipe();
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          className="input-box text-base semibold"
          type="text"
          placeholder="Enter a recipe"
          onChange={(e) => {
            setKeyword(e.target.value);
            setResponse(null);
          }}
          required
        />

        <div className="sm-flex-col flex-row">
          <div className="flex-col flex-grow mw-one-third w-full">
            <label>Diet</label>
            <select
              className="input-box text-base semibold mt-1"
              onChange={(e) => {
                setDiet(e.target.value);
              }}
              value="none"
            >
              {[
                "none",
                "pescetarian",
                "lacto vegetarian",
                "ovo vegetarian",
                "vegan",
                "vegetarian",
              ].map((diet) => {
                return <option value={diet}>{diet}</option>;
              })}
            </select>
          </div>

          <div className="flex-col flex-grow mw-one-third w-full">
            <label>Exclude Ingredients</label>
            <input
              className="input-box text-base semibold mt-1"
              type="text"
              placeholder="nuts"
              onChange={(e) => {
                setExclude(e.target.value);
              }}
            />
          </div>
        </div>

        <button className="btn-search w-full text-base bold" type="submit">
          {loading ? <>Loading..</> : <>Search</>}
        </button>
      </form>

      {response && (
        <div className="mt-6">
            <div className="recipe-card-list mt-10">
            {response.map((recipe) => (
              <div className="recipe-card" key={recipe.id}>
                <div className="flex-col flex-center">
                  <img
                  className="recipe-img"
                    src={`https://spoonacular.com/recipeImages/` + recipe.image}
                    alt={`An image of ` + recipe.title}
                  />
                </div>
                <div className="flex-col flex-center">
                <h3 className="recipe-title text-lg bold mt-4">{recipe.title}</h3>
                <span className="text-sm mt-2 text-secondary-color">Ready in {recipe.readyInMinutes} minutes ~ {recipe.servings} servings</span>
                <a className="mt-4 text-sm recipe-source text-active-color" href={recipe.sourceUrl}>Go to recipe</a>
                </div>
              </div>
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

export default App;
