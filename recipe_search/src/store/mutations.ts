import { Meal } from '../types/types';

export function setSearchedMeals(state: { searchedMeals: Meal[] }, meals: Meal[]) {
    state.searchedMeals = meals
}