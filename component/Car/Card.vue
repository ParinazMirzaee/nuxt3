<script setup>
import heartFilled from "~/assets/002 heartFilled.png"
import heartOutline from "~/assets/002 heartOutline.png"

const props = defineProps({
  car: {
    type: Object
  },
  favored: {
    type: Boolean
  }
})
const emit = defineEmits(['favor'])

</script>

<template>
  <div
      class="position-relative shadow border overflow-hidden m-5 cursor-pointer h-25"
  >
    <img class="position-absolute w-5 cursor" :src="favored ? heartFilled : heartOutline" alt=""
         @click="emit('favor',car.id)">

    <div class="d-flex">
      <NuxtImg
          :src="car.url"
          alt=""
          class="w-25 cursor"
          @click="navigateTo(`/car/${car.name}-${car.id}`)"
      />
      <div class="p-4 d-flex flex-column">
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
.w-5 {
  width: 25px;
  right: 20px;
  top: 20px;
}

</style>