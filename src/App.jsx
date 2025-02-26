import { useState } from "react";
import "./App.css";
import * as api from "./APIUtils";

function App() {
  return (
    <div>
      <h1>Recipe Search</h1>
      <h2>Search Recipes from all over the world</h2>

      <form
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input type="text" placeholder="What would you like to cook?" />

        <div>
          <label>Diet</label>
          <select>
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

        <div>
          <label>Exclude Ingredients</label>
          <input type="text" placeholder="Allergic to something? Type here"/>
        </div>

        <button type="submit">Search</button>
      </form>
    </div>
  );
}

export default App;
