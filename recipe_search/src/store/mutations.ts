import { Meal } from '../types/types';

export function setSearchedMeals(state: { searchedMeals: Meal[] }, meals: Meal[]) {
    state.searchedMeals = meals
}

export function setMealsByLetter(state: { mealsByLetter: Meal[] }, meals: Meal[]) {
    state.mealsByLetter = meals
}

export function setMealsByIngredients(state: { mealsByIngredients: Meal[] }, meals: Meal[]) {
    state.mealsByIngredients = meals
}