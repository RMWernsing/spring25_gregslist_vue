<script setup>
import { AppState } from '@/AppState.js';
import { House } from '@/models/House.js';
import { housesService } from '@/services/HousesService.js';
import { logger } from '@/utils/Logger.js';
import { Pop } from '@/utils/Pop.js';
import { computed } from 'vue';


defineProps({
  houseProp: { type: House, required: true }
})

const account = computed(() => AppState.account)

async function deleteHouse(houseId) {
  try {
    const confirmed = await Pop.confirm('Are you sure you want to delete this house?', 'If you do it will be gone forever.', 'YES', 'NO')
    if (!confirmed) {
      return
    }
    await housesService.deleteHouse(houseId)

  }
  catch (error) {
    Pop.error(error, 'Could not delet house')
    logger.error('COULD NOT DELETE HOUSE', error)
  }
}

</script>


<template>
  <div class="row my-3 shadow-lg">
    <div class="col-md-5 px-0">
      <img class="w-100" :src="houseProp.imgUrl" alt="">
    </div>
    <div class="col-md-7 ">
      <div class="d-flex justify-content-between p-2">
        <div class="d-flex gap-3 align-items-center ">
          <h2>${{ houseProp.price.toLocaleString() }}</h2>
          <p class="mb-2 fs-4">
            Built in {{ houseProp.year }}
          </p>
        </div>
        <div>
          <p>{{ houseProp.createdAt.toLocaleDateString() }}</p>
        </div>
      </div>
      <div class="fs-5">
        <p>Floors: {{ houseProp.levels }}</p>
        <p>Bedrooms: {{ houseProp.bedrooms }}</p>
        <p>Bathrooms: {{ houseProp.bathrooms }}</p>
      </div>
      <div class="my-3">
        <p v-if="houseProp.description">{{ houseProp.description }}</p>
        <p v-else>A beautiful house</p>
      </div>
      <div class="d-flex justify-content-end mt-5"
        :class="{ 'justify-content-between': houseProp.creatorId == account?.id }">
        <button v-if="houseProp.creatorId == account?.id" @click="deleteHouse(houseProp.id)"
          class="btn btn-outline-danger">
          delete <span class="mdi mdi-trash-can-outline"></span>
        </button>
        <div class="d-flex align-items-center gap-2 margin-bottom">
          <p>{{ houseProp.creator.name }}</p>
          <img class="creator-img" :src="houseProp.creator.picture" alt="profile picture">
        </div>
      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
.creator-img {
  height: 3em;
  aspect-ratio: 1/1;
  border-radius: 50%;
}

img {
  height: 45dvh;
  object-fit: cover;

}

.margin-bottom {
  margin-bottom: 0rem;
}
</style>