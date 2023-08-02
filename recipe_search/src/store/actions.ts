import axiosClient from "../axiosClient";

export function searchMeals({commit}:any, keyword:string) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        commit('setSearchedMeals', data.meals)
    })
}

export function mealsByLetter({commit}:any, letter:string) {
    axiosClient.get(`search.php?f=${letter}`)
    .then(({ data }) => {
        commit('setMealsByLetters', data.meals)
    })
}

export function mealsByIngredients({commit}:any, ingredient:string) {
    axiosClient.get(`filter.php?i=${ingredient}`)
    .then(({ data }) => {
        commit('setMealsByIngredients', data.meals)
    })
}