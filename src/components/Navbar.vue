<template>
    <header class="bg-white shadow h-16 flex justify-around items-stretch" >
      <router-link :to="{name: 'home'}" 
      class="inline-flex items-center h-full text-orange-500 font-bold">
        Home
      </router-link>
      <div class="flex items-center gap-1">
        <router-link :to="{name: 'byName'}" 
        class="hover:bg-orange-500 hover:text-white inline-flex items-center px-2 h-full transition-color">
          Search Meals
        </router-link>
        <router-link :to="{name: 'byLetter'}" 
        class="hover:bg-orange-500 hover:text-white inline-flex items-center px-2 h-full transition-color">
          Meals By Letter
        </router-link>
        <router-link :to="{name: 'ingredients'}" 
        class="hover:bg-orange-500 hover:text-white inline-flex items-center px-2 h-full transition-color">
          Meal By Ingredients
        </router-link>
      </div>
    </header>
</template>