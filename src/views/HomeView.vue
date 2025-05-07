<template>
  <div class="max-w-6xl w-full px-4 py-10">
    <h1 class="text-4xl font-bold text-center mb-8">Random Cocktails 🍹</h1>
    <div v-if="loading" class="text-center text-lg">Loading cocktails...</div>
    <div v-else class="grid grid-cols-1 md:grid-cols-3 gap-6">
      <CocktailCard v-for="cocktail in cocktails" :key="cocktail.idDrink" :cocktail="cocktail" />
    </div>
    <div class="text-center mt-8">
      <button 
        @click="refreshPage" 
        class="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 transition">
        Refresh! 🧊
      </button>
    </div>
  </div>
</template>

<script setup lang="ts">
import { ref, onMounted } from 'vue'
import CocktailCard from '@/components/CocktailCard.vue'

// Define the structure of a cocktail object
interface Cocktail {
  idDrink: string
  strDrink: string
  strDrinkThumb: string
  strInstructions: string
  [key: string]: string | null
}

// Store the list of cocktails
const cocktails = ref<Cocktail[]>([])
const loading = ref(true)

// Fetch 3 random cocktails from the API
const fetchCocktails = async () => {
  const results: Cocktail[] = []

  for (let i = 0; i < 3; i++) {
    const res = await fetch('https://www.thecocktaildb.com/api/json/v1/1/random.php')
    const data = await res.json()
    if (data.drinks?.[0]) {
      results.push(data.drinks[0])
    }
  }

  cocktails.value = results
  loading.value = false
}

// Reload the page when the button is clicked
const refreshPage = () => {
  window.location.reload()
}

// Fetch cocktails when the component is mounted
onMounted(fetchCocktails)
</script>
