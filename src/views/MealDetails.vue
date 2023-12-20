<template>
    <div class="max-w-[800px] mx-auto p-8">
        <h1 class="text-5xl font-bold mb-5" >{{ meal.strMeal }}</h1>
        <img :src="meal.strMealThumb" :alt="meal.strMeal" class="max-w-[100%]">
        <div class="grid grid-cols-1 sm:grid-cols-3 text-lg py-2">
            <div>
                <span class="font-bold">Category: </span>{{meal.strCategory}}
            </div>
            <div>
                <span class="font-bold">Area: </span>{{meal.strArea}}
            </div>
            <div>
                <span class="font-bold">Tags: </span>{{meal.strTags}}
            </div>
        </div>

        <div class="my-3">
            {{meal.strInstructions}}
        </div>

        <div
        class="grid grid-cols-1 sm:grid-cols-2">
            <dir>
                <h2 class="text-2xl font-semibold mb-2">Ingredient</h2>
                <ul>
                    <template
                    v-for="(el, ind) of new Array(20)">
                    <li v-if="meal[`strIngredient${ind + 1}`]">
                       {{ind + 1}}.  {{meal[`strIngredient${ind + 1}`]}}
                    </li>
                    </template>
                </ul>
            </dir>

            <div class="mt-3">
                <h2 class="text-2xl font-semibold mb-2 ">Measure</h2>
                <ul>
                    <template
                    v-for="(el, ind) of new Array(20)">
                    <li v-if="meal[`strMeasure${ind + 1}`]">
                       {{ind + 1}}.  {{meal[`strMeasure${ind + 1}`]}}
                    </li>
                    </template>
                </ul>
            </div>
        
            <div class="mt-4">
                 <YoutubeButton :href="meal.strYoutube">Youtube </YoutubeButton>
            
                 <a :href="meal.strSource"
                    target="_blank"
                    class="mt-3 ml-6 px-3 py-2 rounded border-2 bg-indigo-200 border-indigo-200 text-indigo-600">
                    View Original Source
                 </a>
            </div>
        </div>

    </div>
</template>

<script setup>
import axiosClient from "@/axiosClient";
import axios from "axios";
import { onMounted, ref } from "vue";
import { useRoute } from "vue-router";
import YoutubeButton from '../components/YoutubeButton.vue'

const route = useRoute();
const meal = ref({})

onMounted(() => {
    axiosClient.get(`lookup.php?i=${route.params.id}`)
    .then(({data}) => {
        meal.value = data.meals[0] || {};
    })
})

</script>