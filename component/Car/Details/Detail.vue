<script setup>

const props = defineProps({
  car: Object
 
})


/*export default defineComponent({
  computed: {
    car() {
      return car
    }
  }
})*/
</script>

<template>
  <div class="mt-5">
    <NuxtImg
        :src="car.url"
        class="w-75"
        alt=""
    />
    <h1 class="mt-3">{{ car.name }}</h1>
    <div
        class="d-flex text-lg mt-3 border pb-5 justify-content-between"
    >
      <div class="d-flex">
        <p class="mx-2">{{ car.seats }} seats</p>
        <p class="mx-2">|</p>
        <p class="mx-2">{{ car.miles }} miles</p>
      </div>
      <div>
        <p class="font-bold ">${{ car.price }}</p>
      </div>
    </div>
  </div>
</template>