<template>
  <div class="p-8 pb-0 text-orange-500">
    <h1>
      <h1
      class="text-4xl font-bold mb-4">
        Random Meals
      </h1>
    </h1>
    <Meals :meals='meals'/>
  </div>
</template>

<script setup>
import store from "../store";
import axioisClient from "../axiosClient.js"
import { onMounted, ref } from "vue";
import Meals from "../components/Meals.vue"

const meals = ref([]);

onMounted(async () => {
  for(let i=0; i < 10; i++){
    axioisClient
      .get(`random.php`)
      .then(({data}) => meals.value.push(data.meals[0]));
  }
})

</script>

