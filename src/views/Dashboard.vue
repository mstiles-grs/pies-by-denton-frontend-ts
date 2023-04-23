<template>


    <!-- <div class="h-screen w-screen flex justify-center items-center"> -->
      <div v-if="items.length === 0">
        <p>Uh Oh! You dont have any items!</p>
        <p>Get Started!</p>
        <button @click="addIngredients = !addIngredients">
          Add Ingredients
        </button>
      </div>
    <!-- </div> -->

    <!-- Conditionally render the component -->

    <addIngredientsModal v-if="addIngredients" @close="addIngredients = !addIngredients" />
  </template>


<script setup lang="ts">
import { ref, onMounted } from 'vue';
import addIngredientsModal from '../components/modals/IngredientQuickAdd.vue'
import { useGlobal } from '../UseGlobal'; // Update this import path according to your project structure



const { $axios } = useGlobal();
const items = ref<Array<any>>([]);
const addIngredients = ref<boolean>(false);
console.log('stst', addIngredients);
onMounted(async () => {
  try {
    const response = await $axios.get('/user/dashboard');
    console.log(response.data);

    if (response.data.message) {
      items.value = [];
    }
    // Update the `items` ref with the response data
  } catch (error) {
    console.error(error);
  }
});
</script>