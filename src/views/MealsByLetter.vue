<template>
    <div class="flex justify-center gap-5 mt-2 items-center">
      <router-link :to="{name: 'byLetter', params: {letter}}" 
      v-for="letter in letters" :key="letter"
      class="text-lg font-bold mt-4 text-gray-700 flex-wrap">
        {{letter}}
      </router-link>
    </div>
    
   <Meals :meals="meals"/>

</template>

<script setup>
import store from "@/store";
import { computed, onMounted, ref, watch } from "vue";
import MealItem from '../components/MealItem.vue'
import { useRoute } from "vue-router";
import Meals from '../components/Meals.vue'

const letters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ".split('')
const keyword = ref('');
const route = useRoute();
const meals = computed(() => store.state.mealsByLetter);

function searchMealByLetterInVue() {
  store.dispatch('setMealsByLetter', keyword.value)
}

onMounted(() => {
  keyword.value = route.params.letter;
  if(keyword.value) {
    searchMealByLetterInVue()
  }
})

watch(route, () => {
  keyword.value = route.params.letter;
  searchMealByLetterInVue()
})

</script>
