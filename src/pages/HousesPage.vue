<script setup>
import { AppState } from '@/AppState.js';
import HouseForm from '@/components/HouseForm.vue';
import HouseListing from '@/components/HouseListing.vue';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';

onMounted(() => {
  getHouses()
})

const houses = computed(() => AppState.houses)

async function getHouses() {
  try {
    await housesService.getHouses()
  } catch (error) {
    Pop.error(error, 'Could not get houses')
    logger.error('COULD NOT GET HOUSES', error)
  }
}

</script>


<template>
  <section class="container">
    <div class="row">
      <div class="col-12">
        <h1 class="display-3 text-center">Houses</h1>
      </div>
      <HouseForm />
      <div v-for="house in houses" :key="house.id" class="col-12">
        <HouseListing :houseProp="house" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>