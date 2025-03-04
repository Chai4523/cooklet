import { useState } from "react";
import "./App.css";
import * as api from "./APIUtils";

function App() {
  return (
    <div>
      <h1 className="title">Recipe Search</h1>
      <h2 className="subtitle">Search recipes from all over the world.</h2>

      <form
        className="form"
        onSubmit={(e) => {
          e.preventDefault();
          e.stopPropagation();
        }}
      >
        <input
          className="input-box text-base semibold"
          type="text"
          placeholder="Enter a recipe"
        />

        <div className="flex-row">
          <div className="flex-col flex-grow mw-one-third">
            <label>Diet</label>
            <select className="input-box text-base semibold mt-1">
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

          <div className="flex-col flex-grow mw-one-third">
            <label>Exclude Ingredients</label>
            <input
              className="input-box text-base semibold mt-1"
              type="text"
              placeholder="Allergic to something? Type here"
            />
          </div>
        </div>

        <button className="btn-search w-full text-base bold" type="submit">
          Search
        </button>
      </form>
    </div>
  );
}

export default App;
