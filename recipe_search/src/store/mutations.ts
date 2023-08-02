import { Meal } from '../types/types';

export function setSearchedMeals(state: { searchedMeals: Meal[] }, meals: Meal[]) {
    state.searchedMeals = meals
}

export function setSearchedMealsByLetter(state: { searchedMealsByLetter: Meal[] }, meals: Meal[]) {
    state.searchedMealsByLetter = meals
}

export function setSearchedMealsByIngredients(state: { searchedMealsByIngredients: Meal[] }, meals: Meal[]) {
    state.searchedMealsByIngredients = meals
}