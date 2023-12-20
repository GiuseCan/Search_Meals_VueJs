<template>
    <div class="p-8 pb-0">
        <h1 class="text-4xl font-bold mb-5 text-orange-500">By Name</h1>
     <input type="text" 
     v-model="keyword"
     class="rounded border-2 border-gray-300 w-full" 
     placeholder="Search for meals..."
     @change="searchMeals"/>  
    </div> 

   <Meals :meals="meals"/>
</template>

<script setup>
import store from "@/store";
import { computed, onMounted, ref, watch } from "vue";
import axiosClient from "@/axiosClient";
import { useRoute } from "vue-router";
import YoutubeButton from '../components/YoutubeButton.vue'
import MealItem from '../components/MealItem.vue'
import Meals from '../components/Meals.vue'

const meals = computed(() => store.state.searchedMeals);

const route = useRoute();

const keyword = ref('');

function searchMeals() {
    if(keyword.value) {
        store.dispatch('searchMeals', keyword.value)
    }
    else {
        store.commit('setSearchedMeals', [])
    }
}

onMounted(() => {
    keyword.value = route.params.name
    if(keyword.value) {
        searchMeals()
    }
})

</script>
