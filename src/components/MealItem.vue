<template>
     <div 
        class="bg-white shadow rounded-xlz">
           <router-link :to="{name: 'mealDetails', params: {id: meal.idMeal}}">
             <img :src="meal.strMealThumb" :alt="meal.strMeal"
            class="rounded-t-xl w-full h-48 object-cover">
           </router-link>
           <div class="p-3">
             <h3 class="font-semibold">{{meal.strMeal}}</h3>
            <!-- <p>{{meal.strInstructions}}</p> -->
            <p class="mb-4">
                {{truncateWords(meal.strInstructions, 30)}}
            </p>
            <div class="flex justify-between">
                <YoutubeButton :href="meal.strYoutube">
                    Youtube
                </YoutubeButton>
            </div>
           </div>
        </div>
</template>

<script setup>
import YoutubeButton from '../components/YoutubeButton.vue'

function truncateWords(str, count) {
    if (!str) return str
    return str.split(" ").slice(0, count).join(" ");
}

const {meal} = defineProps({
    meal: {
        required: true,
        type: Object
    }
})

</script>