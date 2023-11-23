<script setup>
const props = defineProps({
  car: {
    type: Object
  }
})
</script>

<template>
  <div
      class="shadow border overflow-hidden m-5 cursor-pointer w-50"
      @click="navigateTo(`/car/${car.name}-${car.id}`)"
  >
    <div class="d-flex">
      <NuxtImg
          :src="car.url"
          alt=""
          class="w-25 aspect-ratio"
      />
      <div class="p-4 d-flex">
        <div>
          <h1 class=" ">{{ car.name }}</h1>
          <p class="">
            {{ car.description }}
          </p>
        </div>
        <h1 class="mt-auto">${{ car.price }}</h1>
      </div>
    </div>
  </div>
</template>

<style scoped>

</style>