<script setup>
import { Job } from '@/models/Job.js';


defineProps({
  jobProp: { type: Job, required: true }
})

</script>


<template>
  <div class="shadow-lg">
    <div class="p-2 ps-3">
      <b class="fs-3">{{ jobProp.company }}</b>
      <p class="fs-4">{{ jobProp.jobTitle }}</p>
      <p class="fs-5"><span class="mdi mdi-circle"></span> {{ jobProp.description }}</p>
    </div>
  </div>
</template>


<style lang="scss" scoped></style>