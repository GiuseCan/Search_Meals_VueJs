<template>
    <div class="p-8">
        <h1 class="text-4xl font-bold mb-5">Ingredient</h1>
        <input type="text" 
        v-model="keyword"
        class="rounded border-2 border-gray-300 w-full mb-4" 
        placeholder="Search for ingredient..."/>  
        <router-link :to="{
            name: 'byIngredient', 
            params: {ingredient: ingredient.strIngredient},
            }"
        v-for="ingredient in computedIngredients" 
        :key="ingredient.idIngredient"
        class="bg-white rounded p-3 mb-3 shadow block"
        >
            <h3 class="text-2xl font-bold mb-2"
            >{{ingredient.strIngredient}}</h3>
            <p>{{ingredient.strDescription}}</p>
        </router-link>
    </div>
</template>

<script setup>
import { computed, onMounted, ref } from "vue";
import axiosClient from "@/axiosClient";

const keyword = ref('')
const ingredients = ref([])

const computedIngredients = computed(() => {
  if (!computedIngredients) return ingredients;
  return ingredients.value.filter((i) =>
    i.strIngredient.toLowerCase().includes(keyword.value.toLowerCase())
  );
});

onMounted(() => {
    axiosClient.get(`list.php?i=list`)
    .then(({data}) => {
        ingredients.value = data.meals;
    })
})
</script>
