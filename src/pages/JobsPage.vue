<script setup>
import { AppState } from '@/AppState.js';
import JobListing from '@/components/JobListing.vue';
import { jobsService } from '@/services/JobsService.js';
import { Pop } from '@/utils/Pop.js';
import { computed, onMounted } from 'vue';


onMounted(() => {
  getJobs()
})

const jobs = computed(() => AppState.jobs)

async function getJobs() {
  try {
    await jobsService.getJobs()
  }
  catch (error) {
    Pop.error(error, 'Could not get jobs');
  }
}

</script>


<template>
  <section class="container">
    <div class="row">
      <h1 class="text-center display-3">Jobs</h1>
      <div v-for="job in jobs" :key="job.id" class="col-md-6">
        <JobListing :jobProp="job" />
      </div>
    </div>
  </section>
</template>


<style lang="scss" scoped></style>