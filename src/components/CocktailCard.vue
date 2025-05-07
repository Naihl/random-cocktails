<template>
  <div class="bg-white shadow-xl rounded-xl overflow-hidden hover:scale-105 transition transform duration-300">
    <img :src="cocktail.strDrinkThumb" :alt="cocktail.strDrink" class="w-full h-64 object-cover">
    <div class="p-4">
      <h2 class="text-xl font-semibold mb-2">{{ cocktail.strDrink }}</h2>
      <p class="text-gray-600 text-sm mb-4">{{ cocktail.strInstructions }}</p>
      <ul class="text-gray-800 text-sm list-disc pl-5">
        <li v-for="ingredient in ingredients" :key="ingredient">{{ ingredient }}</li>
      </ul>
    </div>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'

// Define the props for the cocktail object
const props = defineProps<{
  cocktail: {
    strDrink: string  // Name of the cocktail
    strDrinkThumb: string // URL of the cocktail thumbnail
    strInstructions: string // Instructions for making the cocktail
    [key: string]: string | null // Dynamic properties for ingredients and measures
  }
}>()

// Compute the list of ingredients and their measures
const ingredients = computed(() => {
  const result: string[] = []
  for (let i = 1; i <= 15; i++) {
    const ingredient = props.cocktail[`strIngredient${i}`]
    const measure = props.cocktail[`strMeasure${i}`]
    if (ingredient) {
      result.push(measure ? `${measure.trim()} ${ingredient.trim()}` : ingredient.trim())
    }
  }
  return result
})
</script>