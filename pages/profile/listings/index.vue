<script setup lang="ts">
import Listing from "~/component/Car/Listing.vue";

definePageMeta({
  layout: "custom",
});

const {listings} = useCars();

</script>

<template>
  <div>
    <NuxtLayout name="custom">
      <div class="d-flex justify-content-between mt-5 align-items-center">
        <h1 class="text-6xl">My Listings</h1>
        <NuxtLink
            to="/profile/listings/create"
            class="h-100 bg-primary d-flex justify-content-center align-items-center rounded-full text-white font-bold cursor-pointer">
          +
        </NuxtLink
        >
      </div>
      <div class="shadow rounded p-3 mt-5">
        <Listing
            v-for="listing in listings"
            :key="listing.id"
            :listing="listing"
        />
      </div>
    </NuxtLayout>
  </div>
</template>

<style scoped>
.rounded-full {
  border-radius: 50%;
  width: 25px;
}
</style>