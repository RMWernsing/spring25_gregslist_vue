<script setup>
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { ref } from 'vue';


const editableHouseData = ref({
  year: 0,
  imgUrl: '',
  price: 0,
  bedrooms: 0,
  bathrooms: 0,
  levels: 0,
  description: '',
})

async function createHouse() {
  try {
    const houseData = editableHouseData.value
    await housesService.createHouse(houseData)
    editableHouseData.value = {
      year: 0,
      imgUrl: '',
      price: 0,
      bedrooms: 0,
      bathrooms: 0,
      levels: 0,
      description: '',
    }
  }
  catch (error) {
    Pop.error(error, 'Could not create car')
    logger.error('COULD NOT CREATE CAR', error)
  }
}

</script>


<template>
  <div class="row align-items-center mt-3">
    <div class="col-md-6">
      <form @submit.prevent="createHouse()">
        <label for="year">Year</label>
        <input v-model="editableHouseData.year" id="year" name="year" type="number" required min="0" max="2030"
          placeholder="Year...">
        <label for="imgUrl">Image URL</label>
        <input v-model="editableHouseData.imgUrl" id="imgUrl" name="imgUrl" type="url" required minlength="10"
          maxlength="500" placeholder="Image Url...">
        <label for="price">Price</label>
        <input v-model="editableHouseData.price" id="price" name="price" type="number" required min="0" max="1000000000"
          placeholder="Price...">
        <label for="bedrooms">Bedrooms</label>
        <input v-model="editableHouseData.bedrooms" id="bedrooms" name="bedrooms" type="number" required min="0"
          max="1000" placeholder="Bedrooms...">
        <label for="bathrooms">Bathrooms</label>
        <input v-model="editableHouseData.bathrooms" id="bathrooms" name="bathrooms" type="number" required min="0"
          max="1000" placeholder="Bathrooms...">
        <label for="levels">Floors</label>
        <input v-model="editableHouseData.levels" id="levels" name="levels" type="number" required min="0" max="1000"
          placeholder="Floors...">
        <label for="description">Description</label>
        <textarea v-model="editableHouseData.description" class="w-100" name="description" id="description"
          placeholder="Description..." maxlength="5000"></textarea>
        <div class="text-end my-3">
          <button class=" btn btn-outline-danger" type="reset">Reset</button>
          <button class="btn btn-outline-success" type="submit">Submit</button>
        </div>
      </form>
    </div>
    <div class="col-md-6">
      <img class="rounded shadow-lg"
        src="https://images.unsplash.com/photo-1518780664697-55e3ad937233?q=80&w=1965&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
        alt="picture of red house on a hill">
    </div>
  </div>
</template>


<style lang="scss" scoped>
input {
  width: 100%;
}

img {
  width: 100%;
}
</style>