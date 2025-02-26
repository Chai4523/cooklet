import { initializeApp } from "firebase/app";

const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY;
const firebaseConfig = {
  apiKey: "***REMOVED***",
  authDomain: "recipe-app-63bae.firebaseapp.com",
  projectId: "recipe-app-63bae",
  storageBucket: "recipe-app-63bae.firebasestorage.app",
  messagingSenderId: "222113831421",
  appId: "1:222113831421:web:468df3a10318b28bf22194",
  measurementId: "G-W33LRL03Z5",
};

const app = initializeApp(firebaseConfig);

export function searchRecipe(query = "pasta", number = 10) {
  const url = new URL("https://api.spoonacular.com/recipes/complexSearch");
  const queryParams = {
    apiKey: apiKey,
    query: query,
    number: number,
  };

  url.search = new URLSearchParams(queryParams).toString();

  fetch(url)
    .then((response) => {
      return response.json();
    })
    .then((data) => {
      return data;
    })
    .catch((err) => {
      console.log("searchRecipe error:", err);
    });
}
