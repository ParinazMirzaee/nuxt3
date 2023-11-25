<script setup lang="ts">
const props = defineProps({
  listing: Object,
});
</script>

<template>
  <div class="shadow rounded overflow-hidden d-flex justify-content-between my-4">
    <div class="d-flex">
      <img :src="listing.url" alt="" class="w-50 me-3" />
      <div class="p-3">
        <h5>{{ listing.name }}</h5>
        <p class="text-primary">${{ listing.price }}</p>
      </div>
    </div>
    <div class="p-3 d-flex">
      <NuxtLink
          class="text-primary me-4"
          :to="`/profile/listings/view/${listing.id}`"
      >View</NuxtLink
      >
      <p class="text-danger cursor">Delete</p>
    </div>
  </div>
</template>

<style scoped>

</style>