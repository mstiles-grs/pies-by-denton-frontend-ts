<template>
    <div class="modal fixed top-0 left-0 flex items-center justify-center">
        <div class="modal-overlay absolute w-full h-full bg-pink-200 opacity-50" @click="closeModal"></div>

        <div class="modal-container bg-orange-100 rounded-lg shadow-lg p-4 max-w-lg w-11/12 md:w-2/3 lg:w-2/3 xl:w-1/3 h-3/5 lg:h-2/4 flex flex-col">
          <div class="text-center mt-6">
            <h2 class="text-xl font-bold text-cyan-700">Ingredient Quick Add</h2>
          </div>
          <div class=" flex justify-center mt-4 ">
            <form @submit.prevent="handleSubmit" class="bg-white shadow-md rounded px-8 pt-6 pb-8 mb-4">
              <div class="mb-4">
                <label class="block uppercase text-cyan-700 text-sm font-bold mb-2" >
                    Ingredient Name
                </label>
                <input v-model="ingredientName"  class="border border-gray-300 rounded-lg w-60 text-cyan-700 text-left py-2 pl-3 pr-10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500" id="ingredient" type="text" placeholder="Ex: Flour">
              </div>
              <div class="mb-4">
                <label class="block uppercase tracking-wide text-cyan-700 text-xs font-bold mb-2" >
                    Type
                  </label>
                  <div class="relative">
                    <select v-model="ingredientType" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                      <option>Dry Ingredient</option>
                      <option>Dairy</option>
                      <option>Herb</option>
                      <option>Leavener</option>
                      <option>Liquid</option>
                      <option>Oil</option>
                      <option>Fat</option>
                      <option>Extract/Flavoring</option>
                      <option>Spice</option>
                    </select>
                    <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                      <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                    </div>
                  </div>
                </div>

                <div class="mb-4">
                    <label class="block uppercase tracking-wide text-cyan-700 text-xs font-bold mb-2" >
                        Unit Of Measurment
                      </label>
                      <div class="relative">
                        <select v-model="unitOfMeasurement" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                          <option>Cup</option>
                          <option>Gram</option>
                          <option>Ounce</option>
                          <option>Milliliter</option>
                          <option>Liter</option>
                          <option>Gallon</option>
                          <option>Quart</option>
                          <option>Pint</option>
                          <option>Table spoon</option>
                          <option>Tea spoon</option>
                        </select>
                        <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                          <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                        </div>
                      </div>
                    </div>

                    <div class="mb-4">
                        <label class="block uppercase tracking-wide text-cyan-700 text-xs font-bold mb-2" >
                            Storage Measurment
                          </label>
                          <div class="relative">
                            <select v-model="storageMeasurement" class="block appearance-none w-full bg-gray-200 border border-gray-200 text-gray-700 py-3 px-4 pr-8 rounded leading-tight focus:outline-none focus:bg-white focus:border-gray-500" id="grid-state">
                              <option>Box</option>
                              <option>Container</option>
                              <option>Can/Jar</option>
                              <option>Palette</option>
                              <option>Individual/Loose</option>
                            </select>
                            <div class="pointer-events-none absolute inset-y-0 right-0 flex items-center px-2 text-gray-700">
                              <svg class="fill-current h-4 w-4" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20"><path d="M9.293 12.95l.707.707L15.657 8l-1.414-1.414L10 10.828 5.757 6.586 4.343 8z"/></svg>
                            </div>
                          </div>
                        </div>

                        <div class="flex flex-col items-start mb-4">
                            <label class="block uppercase tracking-wide text-cyan-700 text-xs font-bold mb-2">Starting Amount</label>
                            <div class="relative">
                              <input
                              v-model="startingAmount"
                                type="number"
                                id="startingAmount"
                                name="startingAmount"
                                min="0"
                                step="1"
                                class="border border-gray-300 rounded-lg w-60 text-gray-700 text-left py-2 pl-3 pr-10 focus:outline-none focus:border-indigo-500 focus:ring-1 focus:ring-indigo-500"
                              />

                            </div>
                          </div>

              <div class="flex items-center justify-between">
                <button class="bg-emerald-500 hover:bg-emerald-700 text-white font-bold py-2 px-4 rounded focus:outline-none focus:shadow-outline" type="submit">
                  Add Ingredient
                </button>
                <button class="bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 px-4 ml-4 rounded focus:outline-none focus:shadow-outline" type="button" @click="closeModal">
                    Close
                  </button>
              </div>
            </form>
          </div>
        </div>
      </div>

</template>

<script lang="ts" setup>
import { ref } from 'vue';
import { useGlobal } from '../../UseGlobal'; // Update this import path according to your project structure

const ingredientName = ref('');
const ingredientType = ref('');
const unitOfMeasurement = ref('');
const storageMeasurement = ref('');
const startingAmount = ref(0);
const { $axios } = useGlobal();
const emit = defineEmits(['close']);

const handleSubmit = async () => {
  const quickAddIngredient = {
    ingredientName: ingredientName.value,
    ingredientType: ingredientType.value,
    unitOfMeasurement: unitOfMeasurement.value,
    storageMeasurement: storageMeasurement.value,
    startingAmount: startingAmount.value,
  };


  const response = await $axios.post('/ingredient/quick-add',
  {
    quickAddIngredient
  });

  if(response.status === 200) {

    emit('close');

  }
};

const closeModal = () => {
    emit('close');

}
</script>


<style>
.modal {
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
}

.modal-overlay {
  background-color: rgba(0, 0, 0, 0.5);
}
</style>
