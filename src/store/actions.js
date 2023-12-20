import axiosClient from "@/axiosClient";

export function searchMeals ({commit}, keyword) {
    axiosClient.get(`search.php?s=${keyword}`)
        .then(({data}) => {
            // debugger
            commit('setSearchedMeals', data.meals)
        })  
}
export function setMealsByLetter ({commit}, letter) {
    axiosClient.get(`search.php?f=${letter}`)
        .then(({data}) => {
            // debugger
            commit('setMealsByLetter', data.meals)
        })  
}
export function setMealsByIngredient ({commit}, ingredient) {
    axiosClient.get(`filter.php?i=${ingredient}`)
        .then(({data}) => {
            // debugger
            commit('setMealsByIngredient', data.meals)
        })  
}