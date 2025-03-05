import { initializeApp } from "firebase/app";

const SPOONACULAR_API_KEY = import.meta.env.VITE_SPOONACULAR_API_KEY;
const FIREBASE_API_KEY = import.meta.env.VITE_FIREBASE_API_KEY;

const firebaseConfig = {
  apiKey: FIREBASE_API_KEY,
  authDomain: "recipe-app-63bae.firebaseapp.com",
  projectId: "recipe-app-63bae",
  storageBucket: "recipe-app-63bae.firebasestorage.app",
  messagingSenderId: "222113831421",
  appId: "1:222113831421:web:468df3a10318b28bf22194",
  measurementId: "G-W33LRL03Z5",
};

const app = initializeApp(firebaseConfig);

export async function searchRecipe(query) {
  const url = new URL("https://api.spoonacular.com/recipes/search");
  const options = {
    method: "GET",
    headers: {
      "x-api-key": SPOONACULAR_API_KEY,
    },
  };
  const queryParams = {
    query: query.keyword,
    diet: query.diet,
    excludeIngredients: query.exclude,
    number: 20,
    offset: 0,
  };

  url.search = new URLSearchParams(queryParams).toString();

  try {
    const response = await fetch(url, options);
    if (!response.ok) {
      throw new Error("Network response was not ok.");
    }
    const data = await response.json();
    return data;
  } catch (err) {
    console.log("searchRecipe error:", err);
  }
}

export function getRecipeById(id) {
  const url = new URL("https://api.spoonacular.com/recipes");
  const options = {
    method: "GET",
    headers: {
      "x-api-key": SPOONACULAR_API_KEY,
    },
  };
}