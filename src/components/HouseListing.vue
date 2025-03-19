<script setup>
import { House } from '@/models/House.js';


defineProps({
  houseProp: { type: House, required: true }
})

</script>


<template>
  <div class="row my-3 shadow-lg">
    <div class="col-md-5 px-0">
      <img :src="houseProp.imgUrl" alt="">
    </div>
    <div class="col-md-7">
      <div>

      </div>
    </div>
  </div>
</template>


<style lang="scss" scoped>
img {
  height: 40dvh;
  object-fit: cover;
  width: 100%;
}
</style>