<script setup>
import heartFilled from "~/assets/002 heartFilled.png"
import heartOutline from "~/assets/002 heartOutline.png"
import {useState} from "#app";
const props = defineProps({
  car: {
    type: Object
  }
})
const favored = useState(`favored-${props.car.id}`, ()=>{
  return false
})
</script>

<template>
  <div
      class="position-relative shadow border overflow-hidden m-5 cursor-pointer h-25"
  >
    <img class="position-absolute w-5 cursor" :src="favored ? heartFilled : heartOutline" alt="" @click="favored = !favored">

    <div class="d-flex">
      <NuxtImg
          :src="car.url"
          alt=""
          class="w-25 aspect-ratio cursor"
          @click="navigateTo(`/car/${car.name}-${car.id}`)"
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
.w-5{
  width: 25px;
  right: 20px;
  top: 20px;
}

</style>