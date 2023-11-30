<script setup>
import Cards from "~/component/Car/Cards.vue";
import useFetchCars from "~/composables/useFetchCars.js";


const route = useRoute();
const {data: cars, refresh} = await useFetchCars(route.params.city, {
  minPrice: route.query.minPrice,
  maxPrice: route.query.maxPrice,
  make: route.params.make,
});

watch(
    () => route.query,
    () => {
  window.location.reload(true);
})
</script>

<template>
  <div>
    <Cards v-if="cars.length" :cars="cars"/>
    <h3 v-else class="ms-3 mt-5 text-danger">No cars found with filters</h3>
  </div>
</template>
