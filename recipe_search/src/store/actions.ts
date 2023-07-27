import axiosClient from "../axiosClient";

export function searchMeals({commit}:any, keyword:string) {
    axiosClient.get(`search.php?s=${keyword}`)
    .then(({ data }) => {
        debugger;
        commit('setSearchedMeals', data)
    })
}