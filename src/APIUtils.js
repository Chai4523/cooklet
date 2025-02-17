const apiKey = import.meta.env.VITE_SPOONACULAR_API_KEY

export function searchRecipe(query = "pasta", number = 10) {
    const url = new URL("https://api.spoonacular.com/recipes/complexSearch")
    const queryParams = {
        "apiKey": apiKey,
        "query" : query,
        "number" : number
    }

    url.search = new URLSearchParams(queryParams).toString()
    
    fetch(url)
    .then((response) => {
        return response.json()
    })
    .then((data) => {
        return data
    })
    .catch((err) => {
        console.log("searchRecipe error:",err)
    })
}